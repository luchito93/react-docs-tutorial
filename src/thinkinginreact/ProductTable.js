import { Component } from "react";
import CategoriesRow from "./CategoriesRow";
import RowsData from "./RowsData";

class ProducTable extends Component {
    render() {
        const { apiData } = this.props
        const { searchText } = this.props
        const { isStock } = this.props

        const apiDataStocked = isStock === true ? apiData.filter(data => data.stocked === true) : apiData
        const apidDataSearched = searchText ?
            apiDataStocked.filter(data => data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) :
            apiDataStocked

        const categoriesDuplicate = apidDataSearched.map(data => data.category)
        const categories = [...new Set(categoriesDuplicate)]

        const rows = []

        categories.forEach((category, catId) => {
            rows.push(<CategoriesRow name={category} key={`cat-${catId}`}/>)
            const dataCat = apidDataSearched.filter(data => data.category === category)
            dataCat.forEach((datac, datacId) => {
                rows.push(<RowsData name={datac.name} price={datac.price} key={`cat-${catId}-row-data-${datacId}`} />)
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