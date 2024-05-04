<script>
    const pageTitle = "Svelte";

    import Menu from "./Menu.svelte";
    const menus = [
        { 
            title: "Base", 
            url: "/base", 
            desc: "Basic techniques throughout the Svelte.", 
            menus: [
                {
                    title: "Basic", 
                    url: "/state", 
                    desc: "fdsa ldffdsalfj salf jsalfj saljfdlsa jfal", 
                    menus: [
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: []
                        },
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: [
                                {
                    title: "Basic", 
                    url: "", 
                    desc: "...", 
                    menus: [
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: []
                        },
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: []
                        }
                    ]
                },
                {
                    title: "Basic", 
                    url: "", 
                    desc: "...", 
                    menus: []
                },
                            ]
                        }
                    ]
                },
                {
                    title: "Basic", 
                    url: "", 
                    desc: "...", 
                    menus: []
                },
            ]
        },
        { 
            title: "Basic", 
            url: "", 
            desc: "...", 
            menus: [
                {
                    title: "Basic", 
                    url: "", 
                    desc: "...", 
                    menus: [
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: []
                        },
                        {
                            title: "Basic", 
                            url: "", 
                            desc: "...", 
                            menus: []
                        }
                    ]
                },
                {
                    title: "Basic", 
                    url: "", 
                    desc: "...", 
                    menus: []
                },
            ]
        },
    ]
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content="" />
</svelte:head>

<div class="app-main"> 
    <h1>Svelte <small class="text-body-secondary">With JavaScript</small></h1>
    <Menu {menus} depth={1}/>
</div>

<style>
    h1 {
        margin: 1em;
    }
</style>