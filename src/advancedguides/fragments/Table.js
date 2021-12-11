import { Component } from "react";
import Columns from "./Columns";
import HeaderColumns from "./HeaderColumns";

class Table extends Component {
    render () {
        return (
            <div  className="mt-4 grid grid-cols-3">
                <table className="w-full border border-gray-300 shadow-md table-fixed">
                    <thead>
                        <tr>
                            <HeaderColumns />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Columns />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table