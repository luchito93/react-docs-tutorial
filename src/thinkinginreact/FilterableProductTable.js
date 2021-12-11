import { Component } from 'react'
import UserInput from './UserInput'
import ProducTable from './ProductTable'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText : '',
            isStock: false
        }
    }

    handleInputChangue = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }


    apiData = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Test Category", price: "$99.99", stocked: true, name: "Example Name"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]

    render() {
        return (
            <div className='mt-9 grid grid-cols-3'>
                <div className='shadow-md rounded-md p-3'>
                    <h1 className='text-lg font-bold text-center mb-3'>Thinking in React</h1>
                    <UserInput searchText={this.state.searchText} isStock={this.state.isStock}
                        onChangueInput={this.handleInputChangue} />
                    <ProducTable apiData={this.apiData} searchText={this.state.searchText} isStock={this.state.isStock}/>
                </div>
            </div>
        )
    }
}

export default FilterableProductTable