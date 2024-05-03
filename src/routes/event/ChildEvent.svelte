<script>
    const compsTitle = "Child Component Event";

    import ChildEventSub from "./ChildEventSub.svelte";
    const handleMessage = (e) => {
        alert(e.detail.text + ":" + e.detail.age + " saved!!");
        console.log(e);
    }
</script>

<h2>{compsTitle}</h2>

<ChildEventSub on:savedata={handleMessage} />

<hr/>