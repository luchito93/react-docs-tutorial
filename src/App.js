import React, { Suspense } from "react"
import Navbar from "./advancedguides/codesplitin/Navbar"
import Dialog from "./compositionvsinhritance/Dialog"
// import FilterableProductTable from "./thinkinginreact/FilterableProductTable"

const FilterableProductTable = React.lazy(() => import("./thinkinginreact/FilterableProductTable"))

function App (props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto my-3">
                <Dialog />
                <Suspense fallback={<div>Loading perros.......</div>}>
                    <FilterableProductTable />
                </Suspense>
            </div>
        </>
    )
}

export default App