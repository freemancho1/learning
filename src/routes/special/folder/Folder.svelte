<script>
    import File from "./File.svelte";
    import { slide } from "svelte/transition";

    export let expanded = false;
    export let name;
    export let files;

    function toggle() {
        expanded = !expanded;
    }
</script>

<button class:expanded on:click={toggle}>{name}**</button>

{#if expanded}
    <ul transition:slide={{ duration: 300 }}>
        {#each files as file}
            <li>
                {#if file.type === 'folder'}
                    <svelte:self name={file.name} files={file.files} />
                {:else}
                    <File name={file.name} />
                {/if}
            </li>
        {/each}
    </ul>
{/if}

<style>
    button {
        padding: 0 0 0 1.5em;
        background: url(https://svelte.dev/tutorial/icons/folder.svg) 0 0.1em no-repeat;
        background-size: 1em 1em;
        font-weight: bold;
        cursor: pointer;
        border: none;
        font-size: 16px;
    }
    button.expanded {
        background-image: url(https://svelte.dev/tutorial/icons/folder-open.svg);
    }
    ul {
        padding: 0.2em 0 0 0.5em;
        margin: 0 0 0 0.5em;
        list-style: none;
        border-left: 1px #eee solid;
    }
    li {
        padding: 0.2em 0;
    }
</style>