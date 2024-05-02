<script>
    let menus = [
        {id: 0, title: "Home", route: "/"},
        {id: 1, title: "Re-Home", route: "/"}
    ]
</script>

{#each menus as menu}
    <a href={menu.route}>{menu.id}: {menu.title}</a> 
{/each}