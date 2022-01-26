import Navbar from "../advancedguides/codesplitin/Navbar"
import HookEffectState from "./HookEffectState"

export default function HooksIndex (props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <HookEffectState />
            </div>       
        </>
    )
}