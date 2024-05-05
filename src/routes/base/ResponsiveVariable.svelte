<script>
    const compsTitle = "Responsive";
    const compsDescription = "Define reactive variables, conditionals, and code regions.";

    // Define Responsive Variables
    let count = 0;
    
    const increase = () => count++;
    const decrease = () => count--;

    // Define Responsive If
    $: if(count >= 10) {
        alert("Count can\'t be greater than 9");
        count = 9;
    }
    $: if(count < 0) {
        alert("Count can\'t be smaller than 0");
        count = 0;
    }

    // Define Responsive Variables
    $: squared = count * count;
    let threeSquared;

    $: {
        console.log("Squared: " + squared);
        threeSquared = count * count * count;
    }

</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>
    <h5>* Responsive variables are all reprocessed on the page when they change in the template or javascript.</h5>
    <h5>* Responsive variables assigned to other responsive variables are not processed within the page until you change them yourself.</h5>

    <div class="comps-body">
        <h5>
            Current Count: {count} 
            {count <= 1 ? "time": "times"}
            {console.log(count)}
        </h5>
        <h5>Squared: {squared}, 3-Squared: {threeSquared}</h5>

        <button class="btn btn-success" on:click={increase}> + </button>
        <button class="btn btn-info" on:click={decrease}> - </button>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>