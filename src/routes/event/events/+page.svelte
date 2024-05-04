<script>
    const pageTitle = "Events";
    const pageDesc = "Introduction to various events.";

    import MouseEvent from "./MouseEvent.svelte";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDesc} />
</svelte:head>


<div class="app-page">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 on:click="{()=>location.assign('/')}">{pageTitle}</h1> 
    <h2><small class="text-body-secondary">{pageDesc}</small></h2>

    <MouseEvent />
</div>


<style>
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