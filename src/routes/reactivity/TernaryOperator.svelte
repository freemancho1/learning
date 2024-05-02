<script>
    let count = 0;

    const increase = () => count++;
    const decrease = () => {
        if (count === 0) {
            alert("Can\'t be reduced any further!!");
        } else {
            count--;
        }
    };
</script>

<h1>Ternary operator</h1>

<h3>Current Count: {count} {count <= 1 ? "time": "times"}</h3>
<button on:click={increase}> + </button>
<button on:click={decrease}> - </button>
<hr/>