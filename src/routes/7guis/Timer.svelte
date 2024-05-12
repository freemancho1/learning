<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Timer";
    let compsDescription = "Challenge: Concurrency, Competing user/signal interactions, Responsiveness.";

    import { onDestroy } from "svelte";

    let elapsed = 0;
    let duration = 5000;

    let lastTime = window.performance.now();
    let frame;

    (function update() {
        frame = requestAnimationFrame(update);
        
        const time = window.performance.now();
        elapsed += Math.min(time - lastTime, duration - elapsed);
        lastTime = time;
    })();

    onDestroy(() => {
        cancelAnimationFrame(frame);
    });
</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: {(elapsed / duration)*100}%"></div>
    </div>

    <label>
        elapsed time: 
        <progress value={elapsed / duration} />
        {(elapsed / 1000).toFixed(1)}s
    </label>
    <p/>

    <label for="customRange1" class="form-label">Example range</label>
    <input 
        type="range" 
        bind:value={duration} min="1" max="20000"
        class="form-range" 
        id="customRange1"
    />

    <label>
        duration: 
        <input type="range" bind:value={duration} min="1" max="20000" />
        {duration}
    </label>
    <p/>

    <button 
        on:click={() => elapsed = 0}
        class="btn btn-success"
    >
        Reset 
    </button>
    
</ComponentTemplate>


<style>

    input {
        max-width: 200px;
    }

</style>