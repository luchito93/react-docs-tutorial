import { Component } from "react";

class UserInput extends Component {
    render() {
        const { searchText } = this.props
        const { isStock } = this.props

         const Input = () => <input  name="search" placeholder="Serach..." type="text" value={searchText}
            className="border rounded-md w-full shadow-inner p-1 outline-none focus:shadow-blue-100
            focus:shadow-md"/>
        
        const Checkbox = () => <input type="checkbox"  className="mr-3 ml-1" checked={isStock}/>
        
        return (
            <div>
                <Input />
                <div className="flex items-center mt-2">
                    <Checkbox />
                    <p>Only show product in stoc</p>
                </div>
            </div>
        )
    }
}

export default UserInput