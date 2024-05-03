<script>
    const compsTitle = "Await";

    async function getRandomNumber() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        const text = await res.text();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }
    let promise = getRandomNumber();
    const handleClick = () => promise = getRandomNumber();
</script>

<h2>{compsTitle}</h2>

<h3>async ~ await</h3>

<button on:click={handleClick}>Generate Randum Number</button>
{#await promise}
    <p>...waiting</p>
{:then number} 
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red;">{error.message}</p>
{/await}

<hr/>