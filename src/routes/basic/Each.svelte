<script>
    const compsTitle = "Each";

    import EachInitComponent from "./EachInitComponent.svelte";
    let colors = [
        { id: 1, color: "darkblue" }, 
        { id: 2, color: "indigo" }, 
        { id: 3, color: "deeppink" }, 
        { id: 4, color: "salmon" }, 
        { id: 5, color: "gold" }, 
    ]
    const handleClick = () => colors = colors.slice(1);
</script>

<h2>{compsTitle}</h2>

<h3>1. With and Without Key</h3>
<button on:click={handleClick}>Remove First Color</button>
<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
    <div>
        <h4>Keyed</h4>
        {#each colors as color (color.id)}
            <EachInitComponent current={color.color} />
        {/each}
    </div>

    <div>
        <h4>Un-Keyed</h4>
        {#each colors as color}
            <EachInitComponent current={color.color} />
        {/each}
    </div>
</div>

<hr/>