<script>
    const compsTitle = "Dispatcher";
    const compsDescription = "How to execute a parent component's function using arguments in a child component.";

    import DispatcherChild from "./DispatcherChild.svelte";
    import DispatcherChild2 from "./DispatcherChild2.svelte";
    import DispatcherChild3 from "./DispatcherChild3.svelte";

    const childEventHandler = (e) => {
        alert(`${e.detail.text}'s age is ${e.detail.age}`);
    }
    const childEventHandlerWithoutArgs = () => {
        alert("Calling a function without arguments called from a child.");
    }
    const childEventHandlerWithArgs = text => {
        alert(`${text} called!!`);
    }
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">
        <DispatcherChild on:savedata={childEventHandler} />
        <!-- The 2 below both work well(not sure why you would use the above method)-->
        <DispatcherChild2 handler={childEventHandlerWithoutArgs} />
        <DispatcherChild3 handler={childEventHandlerWithArgs} />
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>