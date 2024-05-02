<script>
    import State01 from "./State01.svelte";
    import State02 from "./State02.svelte";
    import State03Html from "./State03HTML.svelte";
    import EventOnclick from "./EventOnclick.svelte";
    import ObjectState from "./ObjectState.svelte";
    const menu = {id: 1, title: 'Home', route: '/'};
    import EachBlock from "./EachBlock.svelte";
</script>

<svelte:head>
    <title>State</title>
    <meta name="description" content="State demo page" />
</svelte:head>

<State01 />
<hr/>
<State02 />
<hr/>
<State03Html />
<hr/>
<EventOnclick />
<hr/>
<ObjectState {menu} />
<hr/>
<EachBlock />
