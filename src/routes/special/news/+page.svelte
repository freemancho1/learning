<script>
    const pageTitle = "News";
    const pageDesc = "Shows a list of news articles and comments.";

    import { onMount } from "svelte";
    import List from "./List.svelte";
    import Item from "./Item.svelte";

    let item;
    let page;

    async function hashChange() {
        const path = window.location.hash.slice(1);
        console.log(`path: ${path} => ${window.location.hash}`)

        if (path.startsWith("/item")) {
            const id = path.slice(6);
            console.log(`id: ${id} => ${path.slice(6)}`)
            item = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`)
                            .then((response) => response.json());
            window.scrollTo(0, 0);
        } else if (path.startsWith("/top")) {
            page = +path.slice(5);
            item = null;
        } else {
            window.location.hash = "/top/1";
        }
    }

    onMount(hashChange);
    // or
    // onMount(() => {
    //     console.log('aaaaaa');
    // });
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDesc} />
</svelte:head>

<svelte:window on:hashchange={hashChange} />

<div class="app-page">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 on:click="{()=>location.assign('/')}">{pageTitle}</h1> 
    <h2><small class="text-body-secondary">{pageDesc}</small></h2>

    <main>
        {#if item}
            <Item {item} returnTo="#/top/{page}" />
        {:else if page}
            <List {page} />
        {/if}
    </main>
</div>

<style>
    main {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        min-height: 101vh;
        padding: 1em;
    }

    main :global(.meta) {
        color: #999;
        font-size: 12px;
        margin: 0 0 1em 0;
    }

    .app-page {
        margin-left: 2em;
        margin-top: 1em;
    }
    h1 {
        /* margin: 1em; */
        margin-top: 1em; 
        margin-left: 0.1em;
        margin-bottom: 1em;
    }
    h2 {
        padding-bottom: 1em;
        margin-top: 1em; 
        margin-bottom: 1em;
        border-bottom: 1px #eee solid;
    }
    :global(h3) {
        color: #666;
    }
    :global(h4) {
        color: #777;
    }
    :global(h5) {
        color: #888;
    }
    :global(.dont) {
        color: salmon;
    }
</style>