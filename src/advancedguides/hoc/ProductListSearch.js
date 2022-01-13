import { useState } from "react"
import products from './products.json'
import ProductList from "./ProductList"

const ProductListSearch = () => {
    const [searchText, setSearchText] = useState('')
    console.log(products)

    return (
        <div className="mt-5">
            <h1 className="text-blue-800 font-bold">HOC search product list</h1>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="shadow-md rounded-md pl-1 my-2"/>
            <ProductList products={products}/>
        </div>
    )

}

export default ProductListSearch