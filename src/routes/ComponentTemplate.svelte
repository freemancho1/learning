<script>
    export let compsTitle = "Specify default value";
    export let compsDescription = "to be expressed when there is no value for input data such as text.";

</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h5>{compsDescription}</h5>

    <div class="comps-body">

        <slot />
        
    </div>
    
</div>

<style>
    
    .comps-body {
        margin: 2em 2.0em 2.0em 0;
        padding: 0 0 1em 0;
        border-bottom: 1px solid #ddd;
    }

</style>