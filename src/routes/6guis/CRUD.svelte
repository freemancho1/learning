<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "CRUD";
    let compsDescription = "Challenge: Separation the domain and presentation logic, managing mutation, building a non-trivial layout.";

    let people = [
        { first: 'Hans', last: 'Emil' },
        { first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
    ];

    let prefix = '';
    let first = '';
    let last = '';
    let idx = 0;

    $: filteredPeople = prefix
        ? people.filter((person) => {
            const name = `${person.last}, ${person.first}`;
            return name.toLowerCase().match(prefix.toLowerCase()); 
        })
        : people;

    $: selected = filteredPeople[idx];

    $: resetInputs(selected);

    const resetInputs = (person) => {
        first = person ? person.first : '';
        last = person ? person.last : '';
    }

    const create = () => {
        people = people.concat({ first, last});
        idx = people.length - 1;
        first = last = '';
    }

    const update = () => {
        selected.first = first;
        selected.last = last;
        // 'people' not declared with '$:' will not detect the change in 'selected'.
        // (must be reassigned)
        people = people;
    }

    const remove = () => {
        const index = people.indexOf(selected);
        people.splice(index, 1);
        first = last = '';
        idx = Math.min(idx, filteredPeople.length-2);
        people = people;
    }

</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="input-group mb-3">
        <span class="input-group-text text-center">Filter</span>
        <input 
            type="text" 
            class="form-control"
            bind:value={prefix}
            placeholder="Filter Prefix"
        />
    </div>

    <select 
        bind:value={idx} 
        size={5}
        class="input-group form-control"
    >
        {#each filteredPeople as person, i }
            <option value={i}>
                {person.last}, {person.first}
            </option>
        {/each}

    </select>

    <div class="input-group mb-3">
        <span class="input-group-text text-center">First</span>
        <input 
            bind:value={first}
            type="text" 
            class="form-control" 
            placeholder="First"
        />
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text text-center">Last</span>
        <input 
            bind:value={last}
            type="text" 
            class="form-control" 
            placeholder="Last"
        />
    </div>

    <div class="buttons">
        <button 
            class="btn btn-success"
            on:click={create}
            disabled={!first || !last}
        >
            Create
        </button>

        <button 
            class="btn btn-warning"
            on:click={update}
            disabled={!first || !last || !selected}
        >
            Update
        </button>

        <button 
            class="btn btn-danger"
            on:click={remove}
            disabled={!selected}
        >
            Delete
        </button>
    </div>
        
</ComponentTemplate>


<style>

    * {
        font-family: inherit;
        font-size: inherit;
    }

    select {
        margin: 0 0 1em 0;
    }

    .input-group {
        max-width: 20em;
    }

    .input-group > span {
        min-width: 5em;
    }

</style>