import React, { Suspense } from "react"

import Calculator from "./Calculator"
import Dialog from "./compositionvsinhritance/Dialog"
// import FilterableProductTable from "./thinkinginreact/FilterableProductTable"
import FragmentsTable from "./advancedguides/fragments/Table"
import RefExample from "./advancedguides/refsandthedom/MyComponent"
import MouseAndPinterEvent from "./advancedguides/mouseandpointerevents/SelectExample"

const FilterableProductTable = React.lazy(() => import("./thinkinginreact/FilterableProductTable"))

function App (props) {
    return (
        <div className="container mx-auto my-3">
            <Calculator />
            <Dialog />
            <Suspense fallback={<div>Loading perros.......</div>}>
                <FilterableProductTable />
            </Suspense>
            <h3 className="font-bold text-center my-4">Advanced Guides</h3>
            <FragmentsTable />
            <RefExample />
            <MouseAndPinterEvent />
        </div>
    )
}

export default App