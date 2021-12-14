import { Component } from "react";
import { GobalContext } from "./ContextVar";

class ContextUsage extends Component {
    static contextType = GobalContext

    render () {
        return (
            <div>
                <h3 className="font-mono text-blue-600 mt-5">Here Using de global context</h3>
                <p>Imprimiendo el contexto global: <span className="font-bold font-mono text-blue-600">{this.context}</span></p>
            </div>
        )
    }
}

export default ContextUsage