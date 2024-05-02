<script>
    export let menu;
    let {id, title, route} = menu;
</script>

<h1>State: Object</h1>

<div>
    <h3>id: {menu.id}, title: {menu.title}, route: {menu.route}</h3>
    <h3>Menu</h3>
    <a href={menu.route}>{menu.title}</a>
</div>

<div>
    <h3>id: {id}, title: {title}, route: {route}</h3>
    <h3>Menu</h3>
    <a href={route}>{title}</a>
</div>

