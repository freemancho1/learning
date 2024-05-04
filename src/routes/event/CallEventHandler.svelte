<script>
    const compsTitle = "Call Event Handler";
    const compsDescription = "How to call event handlers with arguments and event handlers without arguments.";

    // Handler with arguments 
    const handlerWithArguments = text => alert(`${text} click!!`);
    // Handler without arguments
    const handlerWithoutArguments = () => alert('Click handler without arguments.');
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">
        <button class="btn btn-success" on:click={handlerWithArguments("first")}>
            Click with arguments
        </button>
        <ul><li>
            Run when the page loads, but doesn't run when click.
        </li></ul>
        <p/>
        <button class="btn btn-success" on:click={()=>handlerWithArguments("second")}>
            Click with arguments
        </button>
        <button class="btn btn-primary" on:click={handlerWithoutArguments}>
            Click without arguments
        </button>
        <ul><li>
            Run on click, but doesn't run when the page loads.
        </li></ul>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>