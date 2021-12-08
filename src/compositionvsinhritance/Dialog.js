import FancyBorder from "./FancyBorder";
import Column from "./Column";


function Column2 (props) {
    return (
        <FancyBorder color="purple">
            <h1>Second columna especial</h1>
            <p>Composition componenten with fancy border</p>
        </FancyBorder>
    )
}

function Dialog (props) {
    const column1 = (
        <FancyBorder color="golden" >
            <h1>Welcome mi frind</h1>
            <p>This is a messasge insite Fancy Border</p>
        </FancyBorder>
    )

    return <Column left={column1} right={<Column2 />} />
}

export default Dialog