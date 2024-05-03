<script>
    const compsTitle = "Specify default value";
    const compsDescription = "to be expressed when there is no value for input data such as text.";

    let name = "";
</script>

<h2>{compsTitle}</h2>
<h3>{compsDescription}</h3>

<input bind:value={name} placeholder="Enter your name" />
<p>Hello {name || 'freeman'}!!</p>

<hr/>