import { Component } from 'react'
import UserInput from './UserInput'
import ProducTable from './ProductTable'

class FilterableProductTable extends Component {
    apiData = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]

    render() {
        return (
            <div className='mt-9 grid grid-cols-4'>
                <div>
                    <UserInput />
                    <ProducTable apiData={this.apiData}/>
                </div>
            </div>
        )
    }
}

export default FilterableProductTable