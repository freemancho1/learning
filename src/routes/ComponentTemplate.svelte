<script>
    export let compsTitle = "Specify default value";
    export let compsDescription = "to be expressed when there is no value for input data such as text.";

</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">

        <slot />
        
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>