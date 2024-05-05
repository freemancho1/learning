<script>
    const compsTitle = "Mouse Event";
    const compsDescription = "Handle mouse movement events in a specific area through general function calling methods and inline function calling methods.";

    let pos1 = {x: 0, y: 0};
    let pos2 = {x: 0, y: 0};
    $: color = "#eee";

    const handleMouseMove = e => {
        pos1 = {x: e.clientX, y: e.clientY};
        color = "#" + pos1.y % 4096; // 16*16*16
    }
    const action = (tag, text) => console.log(`${text} is ready.`)
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="area" 
            on:mousemove={handleMouseMove}
            style:background-color={color} style:border="1px green solid"
            use:action={"div area"}
            >
            <p>Pos-X: {pos1.x}, Pos-Y: {pos1.y}</p>
        </div>
        <p/>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="area" on:mousemove={e=>pos2={x: e.clientX, y: e.clientY}}>
            <p>Pos-X: {pos2.x}, Pos-Y: {pos2.y}</p>
        </div>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .area {
        width: 100%;
        height: 100px;
        background-color: #fed;
    }
</style>