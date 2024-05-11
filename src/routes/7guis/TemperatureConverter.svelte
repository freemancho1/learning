<script>

    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Temperature Converter";
    let compsDescription = "Challenge: Bidirectional data flow and User-provided text input.";

    let c = 0;
    let f = 32;
    const DIFF = 32;

    const setBothFromC = (value) => {
        // "+": converting 'value' to a number.
        c = +value;
        f = +(DIFF + (9 / 5) * c).toFixed(1);
    }

    const setBothFromF = (value) => {
        f = +value;
        c = +((5 / 9) * (f - DIFF)).toFixed(1);
    }

</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="input-group mb-3">
        
        <!-- Change only when final input(enter key input) -->
        <input 
            type="number" bind:value={c}
            on:change={() => setBothFromC(c)}
            class="form-control" 
        />

        <p class="form-control text-center">°C =</p>
        
        <!-- Changes whenever there is one input -->
        <input 
            type="number" value={f}
            on:input={(e) => setBothFromF(e.target.value)}
            class="form-control" 
        />
        
        <p class="form-control text-center">°F</p>
        
    </div>
    
</ComponentTemplate>


<style>

    input {
        max-width: 100px;
        border-radius: 0px;
    }

    p {
        margin: 0 2em 0 2em;
        border: none;
        border-left: 1px solid #ccc;
        max-width: 55px;
    }

</style>