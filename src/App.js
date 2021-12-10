import Calculator from "./Calculator"
import Dialog from "./compositionvsinhritance/Dialog"
import FilterableProductTable from "./thinkinginreact/FilterableProductTable"

function App (props) {
    return (
        <div className="container mx-auto mt-3">
            <Calculator />
            <Dialog />
            <FilterableProductTable />
        </div>
    )
}

export default App