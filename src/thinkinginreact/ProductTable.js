import { Component } from "react";
import CategoriesRow from "./CategoriesRow";
import RowsData from "./RowsData";

class ProducTable extends Component {
    render() {
        const { apiData } = this.props
        const categoriesDuplicate = apiData.map(data => data.category)
        const categories = [...new Set(categoriesDuplicate)]

        const rows = []

        categories.forEach(category => {
            rows.push(<CategoriesRow name={category} />)
            const dataCat = apiData.filter(data => data.category === category)
            dataCat.forEach(datac => {
                rows.push(<RowsData name={datac.name} price={datac.price} />)
            })
        })

        return (
            <table className="table-auto w-full border border-gray-300 mt-5">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Name</th>
                        <th className="border border-gray-300">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default ProducTable