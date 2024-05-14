<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Flight Booker";
    let compsDescription = "Challenge: Constraints.";

    import { convertDateToStr, convertStrToDate } from "$lib/DateUtils.js";

    const diffDay = 1000 * 60 * 60 * 24;
    const tomorrow = new Date(Date.now() + diffDay);

    let startDateStr = convertDateToStr(tomorrow);
    let endDateStr = startDateStr;

    let isReturn = false;

    $: startDate = convertStrToDate(startDateStr);
    $: endDate = convertStrToDate(endDateStr);

    let message = "";
    const bookFlight = () => {
        const type = isReturn ? "return": "one-way";

        message = `You have booked a ${type} flight, leaving ${startDateStr}`;
        message += (type === "return") ? ` and returning ${endDate.toDateString()}`: "";
    }

</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <select bind:value={isReturn} class="form-select my-size">
        <option value={false}>One-way flight</option>
        <option value={true}>Return flight</option>
    </select>

    <input 
        type="date" bind:value={startDateStr}
        class="form-control my-size" 
    />

    <input
        type="date" bind:value={endDateStr}
        disabled={!isReturn}
        class="form-control my-size"
    />

    <button 
        on:click={bookFlight}
        disabled={isReturn && startDate >= endDate}
        class="btn btn-warning my-size"
    >
        Book
    </button>

    <p>{message}</p>
    
</ComponentTemplate>


<style>

    .my-size {
        min-width: 150px;
        max-width: 150px;
        margin: 0 0 1em 0;
    }

    button {
        color: white;
    }

</style>