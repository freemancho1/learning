<script>
    export let handler;
</script>

<button
    class="btn btn-success"
    on:click={handler("Child")}>
    Call Parent
</button>