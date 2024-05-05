<script>
    export let name = "";
    $: fileType = name.slice(name.lastIndexOf(".") + 1);
    console.log(name.slice(name.lastIndexOf(".") + 1));
    console.log(fileType);
    console.log('https://svelte.dev/tutorial/icons/'+fileType+'.svg');
</script>

<span style="background-image: url(https://svelte.dev/tutorial/icons/{fileType}.svg)">
    {name}
</span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>