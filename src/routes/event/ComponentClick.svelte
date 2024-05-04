<script>
	import ComponentClickSub2 from './ComponentClickSub2.svelte';
	import ComponentClickSub1 from './ComponentClickSub1.svelte';
    const compsTitle = "Add Component Event";
    const compsDescription = "How to assign a click event to a component.";

    const handleClick = () => alert("Click!!");
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>
    <h4>* HTML tags can use click events directly, but components cannot.</h4>

    <div class="comps-body">
        <div class="row">
            <div class="col-4">
                <p>Add Click Event</p>
            </div>
            <div class="col-4">
                <p>Don't Add Click Event</p>
            </div>
            <div class="col-4">
                <p>HTML tag</p>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <ComponentClickSub1 on:click={handleClick} />
            </div>
            <div class="col-4">
                <ComponentClickSub2 on:click={handleClick} />
            </div>
            <div class="col-4">
                <button class="btn btn-info" on:click={handleClick}>Tag Event</button>
            </div>            
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <p>Run Event</p>
        </div>
        <div class="col-4">
            <p>Don't Run Event</p>
        </div>
        <div class="col-4">
            <p>Run Event</p>
        </div>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>