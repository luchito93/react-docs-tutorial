import { Component } from "react";

class UserInput extends Component {
    render() {
        const { searchText } = this.props
        const { isStock } = this.props
        const { onChangueInput } = this.props

         const input = <input  name="searchText" placeholder="Serach..." type="text" value={searchText}
            onChange={onChangueInput} key='user-input'
            className="border rounded-md w-full shadow-inner p-1 outline-none focus:shadow-blue-100
            focus:shadow-md"/>
        
        const checkbox = <input type="checkbox" onChange={onChangueInput}
            className="mr-3 ml-1" checked={isStock} name="isStock"/>
        
        return (
            <div>
                {input}
                <div className="flex items-center mt-2">
                    {checkbox}
                    <p>Only show product in stoc</p>
                </div>
            </div>
        )
    }
}

export default UserInput