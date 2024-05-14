<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Counter";
    let compsDescription = "Challenge: Understanding the basic ideas of a language or toolkit.";

    let count = 0;
</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="input-group mb-3">
        
        <input type="number" class="form-control" bind:value={count} />
        
        <button 
            class="btn btn-secondary"
            on:click={() => count += 1}
        >
            Increase
        </button>
        
    </div>
    
</ComponentTemplate>


<style>

    input {
        max-width: 200px;
    }

</style>