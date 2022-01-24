import Navbar from "./Navbar"
import FragmentsTable from "../fragments/Table"
import RefExample from "../refsandthedom/MyComponent"
import MouseAndPointerEvent from "../mouseandpointerevents/SelectExample"
import ContextUsage from "../context/ContextUsage"
import DinamicContex from "../context/dinamicContext/DinamicContex"
import ParentContexApp from "../context/dinamicContext/UpdatingContexFromChild"
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries"
import ForwardingRef from "../forwardingRef/ForwardingRef"
import ProductListSearch from "../hoc/ProductListSearch"
import { ProducListWithSearchHoc } from "../hoc/HocProducList"
import UserSearch from "../hoc/UserSearch"
import { BlueDatePicker, SpreadButton, CallBackChildren } from "../jsxInDepth/jsxInDepth"
import UsePortal from "../portals/UsePortal"
import { Profiler } from "react"
import  MouseTrackerTwo  from "../renderprops/RenderProps"

export default function AdvancedGuides(props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="font-bold text-lg text-center">Advacned Guides</h1>
                <FragmentsTable />
                <RefExample />
                <MouseAndPointerEvent />
                <h3 className="font-bold mt-7">Contexto</h3>
                <ContextUsage />
                <DinamicContex />
                <ErrorBoundaries>
                    <ParentContexApp />
                </ErrorBoundaries>
                <ForwardingRef />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                    <ProductListSearch />
                    <ProducListWithSearchHoc />
                    <UserSearch />
                </div>
                <div className="my-4">
                    <h3 className="uppercase text-indigo-900 mb-3">jsx in depth</h3>
                    <BlueDatePicker />
                    <SpreadButton />
                    <CallBackChildren />
                </div>
                <Profiler id="UsePortal" onRender={profilerCallback}>
                    <UsePortal />
                </Profiler>
                <MouseTrackerTwo />
            </div>
        </>
    )
}

function profilerCallback (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions
  ) {
    console.log('Profiler update', ...arguments)
  }