<script>
    const compsTitle = "Await";
    const compsDescription = "How to do asynchronous processing in Javascript and Templates.";

    async function getWebData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        const data = await response.text(); 

        if (response.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }
    // let promise = getWebData();
    let promise;
    const runFunc = () => promise = getWebData();
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <h5>* Fetch data from 'https://jsonplaceholder.typicode.com/posts/1' URL</h5>
    <button class="btn btn-success" on:click={runFunc}>
        Get Webdata
    </button>

    <h5>* Different messages are output depending on the status of web data retrieval.</h5>
    {#await promise}
        <p>...waiting</p>
    {:then webdata}
        {#if webdata !== undefined}
        <p>The webdata is:</p>
        <p>{webdata}</p>    
        {/if}
    {:catch error}
        <p style="color: red;">{error.message}</p>
    {/await}
</div>

<hr/>

<style>
    button {
        margin-bottom: 2em;
    }
</style>