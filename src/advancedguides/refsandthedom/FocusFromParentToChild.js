import { Component, createRef } from "react";

function ChildInput(props) {
    const { refChildInput } = props
    return (
        <input className="my-3 w-40 rounded-md shadow-md shadow-gray-500 mr-4 pl-1" ref={refChildInput}/>
    )
}

class FocusFromParentTochild extends Component {
    constructor(props) {
        super(props)
        this.refChildInput = createRef()
    }

    forceFocusChild = () => {
        this.refChildInput.current.focus()
    }

    render() {
        return (
            <>
              <br />
              <ChildInput refChildInput={this.refChildInput} />
              <button className="px-10 py-1 bg-gradient-to-r from-blue-300 to-yellow-400
              font-bold rounded-md"
              onClick={this.forceFocusChild}>Get ref from child</button>
            </>
        )
    }
}

export default FocusFromParentTochild