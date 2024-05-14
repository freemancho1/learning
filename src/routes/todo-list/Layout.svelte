<svelte:head>
    <title>Todo List</title>
    <meta name="description" context="Todo list like Google Todo list." />
</svelte:head>

<div class="app-page container">
    <slot>
        <em>No content was provided.</em>
    </slot>
</div>

<style>
    

    .app-page {
        min-width: 400px;
        max-width: 400px;
        min-height: 100%;
        margin: 1.5em auto;
        border: 1px solid red;
    }
</style>