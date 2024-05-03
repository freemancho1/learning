<script>
    const compsTitle = "Numeric Data";
    const compsDescription = 
        "Enter a value using an `input` or `range`, " +
        "(However, even if a range is given to the input value, " +
        "the input may be outside the range)";

    let a = 1;
    let b = 2;

    $: if (a < 0) { a = 0; }
    $: if (a > 10) { a = 10; }
    $: if (b < 0) { b = 0; }
    $: if (b > 10) { b = 10; }

</script>

<h2>{compsTitle}</h2>
<h3>{compsDescription}</h3>

<label>A: 
    <input type="number" bind:value={a} min="0" max="10" />
    <input type="range" bind:value={a} min="0" max="10" />
</label>
<label>B: 
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a+b}</p>

<hr/>