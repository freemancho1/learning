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
    let cnt = 0;

    $: filteredPeople = prefix
        ? people.filter((person) => {
            const name = `${person.last}, ${person.first}`;
            return name.toLowerCase().match(prefix.toLowerCase());
        })
        : people;

    $: selected = filteredPeople[i];

    $: resetInputs(selected);

    const create = () => {}

</script>


<ComponentTemplate {compsTitle} {compsDescription}>

    <div class="input-group mb-3">
        
        
        
    </div>
    
</ComponentTemplate>


<style>



</style>