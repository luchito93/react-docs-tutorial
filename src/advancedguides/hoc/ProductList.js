import ProductCard from "./ProductCard"

const ProductList = props => {
    let { products } = props
    return (
        <div>
            <h2 className="font-bold text-lg text-center">Productos</h2>
            <div className="my-4">
                {products.map((product) => <ProductCard key={product.sku} product={product}></ProductCard>)}
            </div>
        </div>
    )
}

export default ProductList