import Navbar from "../advancedguides/codesplitin/Navbar"
import HookEffectState from "./HookEffectState"
import { CounterLocalStorage, CounterCustom } from "./CustomHook"
import ContexHook from "./ContexHook"
import CounterReducer from "./HookReducer"

export default function HooksIndex (props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <HookEffectState />
                <div className="grid grid-cols-2 gap-4 border-b-2 border-cyan-600">
                <CounterLocalStorage />
                <CounterCustom />
                </div>
                <ContexHook />
                <CounterReducer />
            </div>       
        </>
    )
}