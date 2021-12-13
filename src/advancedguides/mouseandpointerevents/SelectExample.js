import { Component, createRef } from "react";

class SelectExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.falseToogle = createRef()
    }

    // componentDidMount() {
    //     window.addEventListener('click', this.onClickOutside)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('click', this.onClickOutside)
    // }

    onClickHandler = () => {
        this.setState((currentState) => (
            {
                isOpen: !currentState.isOpen
            }
        ))
    }

    onClickOutside = (event) => {
        console.log('event', event.target)
        if (this.state.isOpen && !this.falseToogle.current.contains(event.target)) {
            this.setState({isOpen: false})
        }
    }

    render() {
        return (
            <div>
                <h3 className="font-bold mt-4">Mouse and pointer event Key Board <strong>Accessibilty</strong></h3>
                <div id="fakeSelect" ref={this.falseToogle} className="w-2/3 border shadow-md rounded-md">
                    <button onClick={this.onClickHandler}>Select a option</button>
                    {
                        this.state.isOpen && (
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SelectExample