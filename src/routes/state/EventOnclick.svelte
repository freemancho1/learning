<script>
    let num = 0;

    const increase = () => num++;
    const decrease = () => num--;
</script>

<h3>State: Click Event Handler</h3>

<button on:click={increase}>
    + 
</button>
<button on:click={decrease}>
    -
</button>
<br/>
<h4>Counter: {num}</h4>