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
                    url: "", 
                    desc: "Basic syntax of Svelte.", 
                    menus: [
                        {
                            title: "Binding", 
                            url: "/base/binding", 
                            desc: "How to assign values to variables.", 
                            menus: []
                        },        
                    ]
                }, 
                {
                    title: "Responsive", 
                    url: "", 
                    desc: "Define reactive variables, conditionals, and code regions.", 
                    menus: []
                }, 
                {
                    title: "If~Then", 
                    url: "", 
                    desc: "Basic using of if ~ else if ~ then.", 
                    menus: []
                },   
                {
                    title: "Each", 
                    url: "", 
                    desc: "Check the change in cases where 'id' is used and " +
                          "when it is not used during repetition with each statement.", 
                    menus: []
                },
                {
                    title: "Await", 
                    url: "", 
                    desc: "How to do asynchronous processing in Javascript and Templates.", 
                    menus: []
                },                
            ],
        },
        { 
            title: "Event", 
            url: "/event", 
            desc: "Introducing various ways to handle event.", 
            menus: [
                {
                    title: "Events", 
                    url: "/event/events", 
                    desc: "Introduction to various events.", 
                    menus: [
                        {
                            title: "Mouse Move Event", 
                            url: "", 
                            desc: "Handle mouse movement events in a specific area through general function calling methods and inline function calling methods.", 
                            menus: []
                        },   
                    ]
                },   
                {
                    title: "Call Event Handler", 
                    url: "", 
                    desc: "How to call event handlers with arguments and event handlers without arguments.", 
                    menus: []
                },   
                {
                    title: "Dispatcher", 
                    url: "", 
                    desc: "Basic techniques throughout the Svelte.", 
                    menus: []
                },   
                {
                    title: "Add Component Event", 
                    url: "", 
                    desc: "How to assign a click event to a component.", 
                    menus: []
                },
                {
                    title: "Indicator", 
                    url: "", 
                    desc: "Instructs how to execute an event.", 
                    menus: []
                },
            ],
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