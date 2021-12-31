import { Component, createRef, forwardRef } from "react";

const FancyButton = forwardRef((props, ref) => {
    return (
        <input ref={ref} type="text" onChange={props.onChange} value={props.value}
        className="shadow-md shadow-gray-400 mb-3 w-full rounded-md pl-2"/>
    )
})

class ForwardingRef extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refInner: createRef(),
            inputText: ''
        }
    }

    getChildRef = () => {
        const { refInner } = this.state
        refInner.current.focus()
    }

    onChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div className="grid grid-cols-3">
                <div>
                    <h3 className="text-lg font-mono font-bold mt-4 mb-3 text-center">Forwarding Ref</h3>
                    <FancyButton ref={this.state.refInner} onChange={this.onChange}
                    value={this.state.inputText}>Mi boton salvaje</FancyButton>
                    <button  className="
                            flex
                            h-10
                            w-full
                            justify-center
                            items-center
                            bg-orange-300
                            shadow-md
                            rounded-md
                            hover:bg-orange-500
                    " onClick={this.getChildRef}>REF FOCUS INPUT INSIDE FUNCION</button>
                </div>
            </div>
        )
    }
}

export default ForwardingRef