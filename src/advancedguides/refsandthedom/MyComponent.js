import { Component, createRef } from "react";
import FocusFromParentTochild from "./FocusFromParentToChild";

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.refDivExample = createRef()
        this.refInput = createRef()
    }

    focusTextInput = () => {
        console.log('print ref', this.refDivExample.current)
        this.refInput.current.focus()
    }

    componentDidMount() {
        this.focusTextInput()
    }

    render() {
        return (
            <>
                
                <div className="mt-5 block text-lg font-bold" ref={this.refDivExample}>Refs and The Dom</div>
                <label htmlFor="inputRef" className="mr-2">Create Ref example focus:</label>
                <input name="inputRef" id="inputRef" type="text" ref={this.refInput} className="w-40 shadow-md shadow-purple-500 pl-4 mr-4 rounded-md mb-2"/>
                <button onClick={this.focusTextInput} className="px-4 py-1 rounded-md border border-blue-300
                bg-gradient-to-r from-blue-300 to-yellow-400">test refs</button>
                <FocusFromParentTochild/>
            </>
        )
    }
}

export default MyComponent