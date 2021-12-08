function Column (props) {
    return (
        <div className="column-style">
            <div className="column-1">{ props.left }</div>
            <div className="column-2">{ props.right }</div>
        </div>
    )
}

export default Column