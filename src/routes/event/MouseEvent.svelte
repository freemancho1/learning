<script>
    const compsTitle = "Mouse Move Evnet";
    const compsDescription = "Display mouse position in browser using mouse move event";

    let pos = {x: 0, y: 0};
    let inlinePos = { x: 0, y: 0};

    const handleMouseMove = e => {
        pos.x = e.clientX;
        pos.y = e.clientY;
    }
</script>

<h3>{compsTitle}</h3>
<h4>{compsDescription}</h4>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="area" on:mousemove={handleMouseMove}>
    <div>
        Pos-X: {pos.x}
    </div>
    <div>
        Pos-Y: {pos.y}
    </div>
</div>

<!-- Inline Handler -->
<h5>Using Inline Handler</h5>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    class="area" 
    on:mousemove={e => inlinePos={x: e.clientX, y: e.clientY}}>
    <div>
        Pos-X: {inlinePos.x}
    </div>
    <div>
        Pos-Y: {inlinePos.y}
    </div>
</div>

<hr/>

<style>
    .area {
        width: 100%;
        height: 100px;
        background-color: antiquewhite;
    }
</style>