<script>
    const compsTitle = "Each";
    const compsDescription = "Check the change in cases where 'id' is used and " +
                              "when it is not used during repetition with each statement.";
    import EachSub from "./EachSub.svelte";

    let colors = [
        { id: 1, color: "darkblue" }, 
        { id: 2, color: "indigo" }, 
        { id: 3, color: "deeppink" }, 
        { id: 4, color: "salmon" }, 
        { id: 5, color: "gold" }, 
    ]
    const handleClick = () => colors = colors.slice(1); 
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>
    <h4 class="dont">* DON'T UNDERSTAND</h4>

    <h5 class="sub-title">* Various Usage Examples:</h5>
    <xmp>{@html "{#each menus as {id, title, route}}<p>id: {menu.id}, title: {menu.title}, route: {menu.route}</p>{/each}"}</xmp>
    <xmp>{@html "{#each menus as menu}<p>id: {menu.id}, title: {menu.title}, route: {menu.route}</p>{/each}"}</xmp>
    <xmp>{@html "{#each menus as menu, idx}<p>idx: {idx}, id: {menu.id}, title: {menu.title}, route: {menu.route}</p>{/each}"}</xmp>

    <button 
        class="btn btn-danger"
        on:click={handleClick}>
        Remove First Color
    </button>
    <div class="color-table">
        <div>
            <h5>With Key</h5>
            {#each colors as color (color.id)}
                <EachSub current={color.color} />
            {/each}
        </div>
        <div>
            <h5>Without Key</h5>
            {#each colors as color}
                <EachSub current={color.color} />
            {/each}
        </div>
    </div>

</div>

<hr/>

<style>
    .color-table {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 1em;
    }
    .btn {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .sub-title {
        margin-top: 1em;
    }
    xmp {
        padding: 0.5em;
        background-color: #def;
    }
</style>