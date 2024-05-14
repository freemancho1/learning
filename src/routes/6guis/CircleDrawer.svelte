<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Circle Drawer";
    let compsDescription = "Challenge: Undo/Redo, Custom drawing, Dialog control.";

    let i = 0;
    let undoStack = [[]];
    let circles = [];
    let selected;
    let adjusting = false;
    let adjusted = false;

    const handleClick = (event) => {
        if (adjusting) {
            adjusting = false;
            if (adjusted) push();
            return;
        }

        const circle = {cx: event.clientX, cy: event.clientY, r: 50};
        circles = circles.concat(circle);
        selected = circle;

        push();
        console.log(circle);
    }

    const adjust = (event) => {
        selected.r = +event.target.value;
        circles = circles;
        adjusted = true;
    }

    const select = (circle, event) => {
        if (!adjusting) {
            event.stopPropagation();
            selected = circle;
        }
    }

    const push = () => {
        const newUndoStack = undoStack.slice(0, ++i);
        newUndoStack.push(clone(circles));
        undoStack = newUndoStack;
    }

    const travel = (d) => {
        circles = clone(undoStack[(i += d)]);
        adjusting = false;
    }

    function clone(circles) {
        return circles.map(({cx, cy, r}) => ({cx, cy, r}))
    }

</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="controls">
        <button 
            class="btn btn-success"
            on:click={() => travel(-1)}
            disabled={i === 0}
        >
            Undo
        </button>

        <button
            class="btn btn-danger"
            on:click={() => travel(+1)}
            disabled={i === undoStack.length - 1}
        >
            Redo
        </button>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <svg on:click={handleClick}>
    
        {#each circles as circle}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <circle cx={circle.cx} cy={circle.cy} r={circle.r}
                on:click={(event)=>select(circle, event)}
                on:contextmenu|stopPropagation|preventDefault={() => {
                    adjusting = !adjusting;
                    if (adjusting) selected = circle;
                }}
                fill={circle===selected ? "#ccc": "white"}
            />
        {/each}
    
    </svg>

    {#if adjusting}
        <div class="adjuster">
            <p>Adjust diameter of circle at ({selected.cx}, {selected.cy})</p>
            <input 
                class="form-control" 
                type="range" 
                value={selected.r} 
                on:input={adjust} 
            />
        </div>
    {/if}
    
</ComponentTemplate>


<style>

    .controls {
        position: absolute;
        width: 100%;
        text-align: center;
        margin-top: 1em;
    }

    svg {
        background-color: #eee;
        width: 100%;
        height: 250px;
    }

    circle {
        stroke: black;
    }

    .adjuster {
        position: absolute;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1em;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
    }

    input[type="range"] {
        width: 100%;
    }

</style>