<script>
    import ComponentTemplate from "../ComponentTemplate.svelte";
    let compsTitle = "Circle Drawer";
    let compsDescription = "Challenge: Undo/Redo, Custom drawing, Dialog control.";

    let i = 0;
    let undoStack = [[]];
    let circles = [];
    let selected;
    let adjusting = false;
    let adjusted = false;

    const handleClick = (event) => {
        if (adjusting) {
            adjusting = false;
            if (adjusted) push();
            return;
        }

        const circle = {cx: event.clientX, cy: event.clientY, r: 50};
        circles = circles.concat(circle);
        selected = circle;

        push();
    }

    const adjust = (event) => {
        selected.r = +event.target.value;
        circles = circles;
        adjusted = true;
    }

    const select = (circle, event) => {
        if (!adjusting) {
            event.stopPropagation();
            selected = circle;
        }
    }

    const push = () => {
        const newUndoStack = undoStack.slice(0, ++i);
        newUndoStack.push(clone(circles));
        undoStack = newUndoStack;
    }

    const travel = (d) => {
        circles = clone(undoStack[(i += d)]);
        adjusting = false;
    }

    function clone(circles) {
        return circles.map(({cx, cy, r}) => ({cx, cy, r}))
    }

</script>


<ComponentTemplate {compsTitle} {compsDescription}>


    
</ComponentTemplate>


<style>



</style>