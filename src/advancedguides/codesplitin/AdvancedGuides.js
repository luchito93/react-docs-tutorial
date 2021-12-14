import Navbar from "./Navbar"
import FragmentsTable from "../fragments/Table"
import RefExample from "../refsandthedom/MyComponent"
import MouseAndPointerEvent from "../mouseandpointerevents/SelectExample"

export default function AdvancedGuides(props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="font-bold text-lg text-center">Advacned Guides</h1>
                <FragmentsTable />
                <RefExample />
                <MouseAndPointerEvent />
            </div>
        </>
    )
}