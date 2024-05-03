<script>
    const compsTitle = "Modifiers";
    const compsDescription = "<tag on:event|modifier={eventHandler}>";

    const handlerClick = text => console.log(`${text} click!`);
    const checkAndMove = () => {
        let move = confirm('Go Home?');
        move && location.assign("/");
    };
</script>

<h3>{compsTitle}</h3>
<h4>{compsDescription}</h4>
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

<h4>preventDefault</h4>
<a href="??" on:click|preventDefault={()=>checkAndMove("href!!!")}>
    A tag, No link
</a>

<h4>stopPropagation</h4>
<button on:click={() => handlerClick('Outer')}>
    <button on:click={() => handlerClick('Inner')}>
        No stopPropagation
    </button>
</button>
<button on:click={() => handlerClick('Outer')}>
    <button on:click|stopPropagation={() => handlerClick('Inner')}>
        stopPropagation
    </button>
</button>

<h4>once</h4>
<button on:click={() => handlerClick('Normal')}>Normal</button>
<button on:click|once={() => handlerClick('Once')}>Once</button>


<hr/>