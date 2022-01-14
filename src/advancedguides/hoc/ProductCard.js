const ProductCard = props => {
    const {title, style, price, description, isFreeShipping} = props.product
    const productCard = (
        <>
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
        </>
    )
    const userCard = (
        <>
            <p>
                <b>Title</b> {title}
            </p>
            <p>
                <b>Description</b> {description}
            </p>
        </>
    )
    return (
        <div className="shadow-md rounded-md border-2 border-indigo-500 my-3 p-2">
            { isFreeShipping === undefined ? userCard : productCard}
        </div>
    )
}

export default ProductCard

