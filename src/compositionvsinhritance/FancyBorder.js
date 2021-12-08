function FancyBorder (props) {
    return (
        <div className={'fancyborder-' + props.color}>
            {props.children}
        </div>
    )
}

export default FancyBorder