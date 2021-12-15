import { Component } from "react";
import { ThemeContext } from "./ContextVars";

class ThemedButton extends Component {
    static contextType = ThemeContext

    render () {
        const props = this.props
        return (
            <button {...props} className={this.context.tailwind}></button>
        )
    }
}

export default ThemedButton