function RowsData (props) {
    return (
        <tr>
            <td className="border border-gray-300">{ props.name }</td>
            <td className="border border-gray-300">{ props.price }</td>
        </tr>
    )
}

export default RowsData