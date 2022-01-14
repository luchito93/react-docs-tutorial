import { useState } from "react"
import products from './products.json'
import ProductList from "./ProductList"

const ProductListSearch = () => {
    const [searchText, setSearchText] = useState('')

    const filter = () => {
        if(!searchText) return products
        return products.filter(product => (
            product.title.toUpperCase().toLowerCase().indexOf(searchText.toUpperCase().toLowerCase()) !== -1))
    }

    return (
        <div className="mt-5">
            <h1 className="text-blue-800 font-bold">Original search product list</h1>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="shadow-md rounded-md
            pl-1 my-2 border border-lime-700 focus:outline-none"/>
            <ProductList products={filter()}/>
        </div>
    )

}

export default ProductListSearch