<script>
    const compsTitle = "Indicator";
    const compsDescription = "Instructs how to execute an event.";

    const handlerClick = text => alert(`${text} click!!`);
    // Moves when URL movement is permitted.
    const handlerCheckAndMove = () => {
        let move = confirm("Go Home?");
        move && location.assign("/");
    }
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">
        <h5>Indicater Types</h5>
        <ul>
            <li>
                <b>preventDefault</b>: Removed the default processing function for the event.
            </li>
            <li>
                <b>stopPropagation</b>: Prevents further event propagation. 
                Using when ending an event in the middle while using nested tags.
            </li>
            <li>
                <b>passive</b>: Improved performance of touch or wheel scroll events.
            </li>
            <li>
                <b>capture</b>: Execute event handlers during capture phase, not bubbling.
            </li>
            <li>
                <b>once</b>: Execute event handler only once.
            </li>
            <li>
                <b>self</b>: Executes only when the element defining e.target 
                and event handler is the same.
            </li>
        </ul>

        <h5>* preventDefault</h5>
        <ul><li>URL navigation, which is the basic function of the a tag,
             is not performed.
        </li></ul>
        <a href="??" on:click|preventDefault={handlerCheckAndMove}>
            A tag, No link
        </a>
        <p/>

        <h5>* stopPropagation</h5>
        <button class="btn btn-success" on:click={() => handlerClick('Outer')}>
            <button class="btn btn-info" on:click={() => handlerClick('Inner')}>
                No stopPropagation
            </button>
        </button>
        <button class="btn btn-success" on:click={() => handlerClick('Outer')}>
            <button class="btn btn-info" on:click|stopPropagation={() => handlerClick('Inner')}>
                stopPropagation
            </button>
        </button>
        <p/>

        <h5>* once</h5>
        <button class="btn btn-success" on:click={() => handlerClick('Normal')}>Normal</button>
        <button class="btn btn-success" on:click|once={() => handlerClick('Once')}>Once</button>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>