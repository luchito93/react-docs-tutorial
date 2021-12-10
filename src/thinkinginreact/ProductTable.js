import { Component } from "react";

class ProducTable extends Component {
    render() {
        const apiData = this.props

        console.log(apiData)

        return (
            <table className="table-auto w-full border border-gray-300 mt-5">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Name</th>
                        <th className="border border-gray-300">Price</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        )
    }
}

export default ProducTable