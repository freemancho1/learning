<script>
    const compsTitle = "Call event function using parameters";
    const compsDescription = "Using `backtick` & console.log()";

    const handlerParameter = text => console.log(`${text} click!!`);
    const handlerWithoutParameter = () => console.log('Click without parameter')
</script>

<h3>{compsTitle}</h3>
<h4>{compsDescription}</h4>

<div>
    <button on:click={handlerParameter('first')}>Parameter1</button>
    Run when the page loads, but doesn't run when click.
</div>

<div>
    <button on:click={() => handlerParameter('second')}>Parameter2</button>
    <button on:click={handlerWithoutParameter}>Without Parameter</button>
    Run on click, but doesn't run when the page loads.
</div>
<hr/>