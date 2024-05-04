<script>
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();
    // Event handler occurring in child component
    const saveData = () => {
        dispatcher(
            "savedata",     // Indicator of child to be received by parent
            {text: "Hello!!", age: 30}  // Received data
        );
    }

</script>

<button 
    class="btn btn-success"
    on:click={saveData}>
    Save Data
</button>
