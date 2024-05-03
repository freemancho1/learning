<script>
    const pageTitle = "Event on javascript demo page";

    import MouseEvent from "./MouseEvent.svelte";
    import ParameterFunction from "./ParameterFunction.svelte";
    import Modifiers from "./Modifiers.svelte";
    import ChildEvent from "./ChildEvent.svelte";
    import ComponentClick from "./ComponentClick.svelte";
</script>

<svelte:head>
    <title>Event</title>
    <meta name="description" content={pageTitle} />
</svelte:head>

<h1>{pageTitle}</h1>  

<ComponentClick />
<ChildEvent />
<Modifiers />
<ParameterFunction />
<MouseEvent />