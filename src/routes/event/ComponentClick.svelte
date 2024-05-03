<script>
	import ComponentClickSub2 from './ComponentClickSub2.svelte';
	import ComponentClickSub1 from './ComponentClickSub1.svelte';

    const compsTitle = "Child Component Event 2";
    const compsDescription = "";

    const handleClick = () => alert("Click!!");
</script>

<h2>{compsTitle}</h2>
<!-- <h3>{compsDescription}</h3> -->

<ComponentClickSub1 on:click={handleClick} />
<ComponentClickSub2 on:click={handleClick} />
<hr/>