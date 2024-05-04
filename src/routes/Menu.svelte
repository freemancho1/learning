<script>
    export let menus;
    export let depth;

    const goUrl = url => {
        if (url !== "") {
            location.assign(url);
        }
    }

    let btnVisible = [];
    const showBtn = (idx, value) => btnVisible[idx] = value;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#each menus as menu, idx}
    <details 
        class="{idx===0 ? 'top': ''} {depth===1? 'depth1': 'depth2'}"
        open={depth===1}>
        <summary
            on:mouseenter={()=>showBtn(idx, true)}
            on:mouseleave={()=>showBtn(idx, false)}
        >
            {menu.title} 
            <button 
                class="btn btn-info btn-sm"
                style="display: {(btnVisible[idx] && menu.url !=='') ? 'inline-block' : 'none'}"
                on:click={() => goUrl(menu.url)}>
                Go
            </button>
        </summary>
        <p
            on:mouseenter={()=>showBtn(idx, true)}
            on:mouseleave={()=>showBtn(idx, false)}
        >
            {menu.desc}
        </p>
        {#if menu.menus != []}
            <svelte:self menus={menu.menus} depth={depth+1} />
        {/if}
    </details>
{/each}

<style>
    details { 
        margin-left: 2em; 
    } 
    /* details[open] {
        border-bottom: 1px #eee solid;
    } */
    details.top {
        margin-top: 1em;
    }
    details.depth1 {
        margin-bottom: 2em;
    }
    details.depth2 {
        margin-bottom: 1em;
    }
    summary { 
        color: #345; 
        font-weight: bold; 
        padding-left: 0px; 
    } 
    details.depth1 summary {
        font-size: 1.6em; 
    }
    details.depth2 summary {
        font-size: 1.4em; 
        height: 1.6em;
    }
    p { 
        color: #777; 
        font-size: 1em; 
        margin-left: 25px; 
        margin-bottom: 0px;
    } 
    /* Remove Marker */
    summary { 
        list-style-type: none; 
    }
    /* .svelte-menu * {border: 1px red solid;} */
</style>