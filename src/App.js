import Calculator from "./Calculator"
import Dialog from "./compositionvsinhritance/Dialog"
import FilterableProductTable from "./thinkinginreact/FilterableProductTable"
import FragmentsTable from "./advancedguides/fragments/Table"

function App (props) {
    return (
        <div className="container mx-auto mt-3">
            <Calculator />
            <Dialog />
            <FilterableProductTable />
            <h3 className="font-bold text-center my-4">Advanced Guides</h3>
            <FragmentsTable />
        </div>
    )
}

export default App