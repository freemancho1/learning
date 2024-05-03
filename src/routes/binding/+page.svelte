<script>
    const pageTitle = "Binding";
    import Text from "./Text.svelte";
    import Number from "./Number.svelte";
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageTitle} />
</svelte:head>

<h1>{pageTitle}</h1> 
<hr/>

<Text />
<Number />

<hr/>