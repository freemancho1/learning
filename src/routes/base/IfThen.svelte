<script>
    const compsTitle = "If ~ Then";
    const compsDescription = "Basic using of if ~ else if ~ then";

    let data = 0;
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>
    
    <h5>Enter a number between 0 and 10.</h5>
    <input type="number" class="form-control" bind:value={data} />
    {#if data > 7}
        <p>{data} is greater than 7</p>
    {:else if 3 > data}
        <p>{data} is less than 3</p>
    {:else}
        <p>{data} is between 3 and 7 </p>
    {/if}
</div>

<hr/>