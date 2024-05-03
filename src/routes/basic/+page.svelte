<script>
    const pageTitle = "Basic Syntax";

    import Each from "./Each.svelte";
    import Await from "./Await.svelte";
</script>

<svelte:head>
    <title>Basic</title>
    <meta name="description" content={pageTitle} />
</svelte:head>

<h1>{pageTitle}</h1> 

<Each />
<Await />