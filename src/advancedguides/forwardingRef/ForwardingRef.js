import { Component } from "react";

const FancyButton = (props) => {
    return (
        <button className="
        flex
        h-10
        w-full
        justify-center
        items-center
        bg-orange-300
        shadow-md
        rounded-md
        hover:bg-orange-500
        ">{ props.children }</button>
    )
}

class ForwardingRef extends Component {
    render() {
        return (
            <div className="grid grid-cols-3">
                <div>
                    <h3 className="text-lg font-mono font-bold mt-4 mb-3 text-center">Forwarding Ref</h3>
                    <FancyButton>Mi boton salvaje</FancyButton>
                </div>
            </div>
        )
    }
}

export default ForwardingRef