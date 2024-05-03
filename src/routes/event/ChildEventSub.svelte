<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const saveData = () => {
        // `savedata`: Event to be delivered to parent component
        // {}: Delivered data
        dispatch("savedata", {
            text: "Hello!!",
            age: 30,
        });
    }
</script>

<button on:click={saveData}>Save Data</button>