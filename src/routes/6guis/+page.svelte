<script>
    import PageTemplate from "../PageTemplate.svelte";

    let pageTitle = "7 GUIs";
    let pageDesc = "A GUI Programming Benchmark.";

    import Counter from "./Counter.svelte";
    import TemperatureConverter from "./TemperatureConverter.svelte";
    import FlightBooker from "./FlightBooker.svelte";
    import Timer from "./Timer.svelte";
    import Crud from "./CRUD.svelte";
    import CircleDrawer from "./CircleDrawer.svelte";

</script>


<PageTemplate {pageTitle} {pageDesc}>

    <Counter />
    <TemperatureConverter />
    <FlightBooker />
    <!-- <Timer /> -->
    <Crud />
    <CircleDrawer />
    
</PageTemplate>