function CategoriesRow (props) {
    return (
        <tr>
            <td colSpan="2" className="text-center font-bold border border-gray-300">{ props.name }</td>
        </tr>
    )
}

export default CategoriesRow