<script>
    const compsTitle = "Basics";
    const compsDescription = "Basic syntax of Svelte.";

    let url = "https://www.kdn.com/korean/img/common/h1_logo.png";
    let src = "https://www.kdn.com/korean/img/common/h1_logo.png";
</script>

<div class="comps">
    <h3>{compsTitle}</h3>
    <h4>{compsDescription}</h4>

    <div class="comps-body">
        <img src={url} alt="kdn-logo"/>
        <img {src} alt="kdn-logo"/>

        <h5 class="sub-title">* Using <strong>@html</strong></h5>
        <p>If the attribute name and the variable name to be assigned are the same, the attribute name can be omitted.</p>
        <xmp>{@html "<img src={url} alt='kdn-logo'/> <img {src} alt='kdn-logo'/>"}</xmp>
    </div>
    
</div>

<hr/>

<style>
    .comps-body {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .sub-title {
        margin-top: 1em;
    }
    xmp {
        padding: 0.5em;
        background-color: #def;
    }
</style>