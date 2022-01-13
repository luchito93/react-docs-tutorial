const ProductCard = props => {
    const {title, style, price, description, isFreeShipping} = props.product
    return (
        <div className="shadow-md rounded-md border-2 border-indigo-500 my-3 p-2">
            <p>
                <b>Title:</b> {title}
            </p>
            <p>
                <b>Style:</b> {style}
            </p>
            <p>
                <b>Price:</b> {price}
            </p>
            <p>
                <b>Description:</b> {description}
            </p>
            <p>
                <b>Free shipping:</b> {isFreeShipping}
            </p>
        </div>
    )
}

export default ProductCard

