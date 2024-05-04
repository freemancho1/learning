<script>
    const pageTitle = "Base";
    const pageDesc = "Basic techniques throughout the Svelte.";

    import Each from "./Each.svelte";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDesc} />
</svelte:head>


<div class="app-main">
    <h1>{pageTitle}</h1> 
    <h2><small class="text-body-secondary">{pageDesc}</small></h2>

    <Each />

</div>


<style>
    .app-main {
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
    :global(h5) {
        color: #777;
    }
</style>