"use client"
import ProductCard from "../molecules/ProductCard"
import useProductList from "@/hooks/useProductList"

const ProductList = () => {
    const { products, loading } = useProductList()

    return (
        <div className="flex flex-col gap-7 mt-10 w-4/5">
            {products && products.map((product, index) => {
                return (<ProductCard id={Number(product.id)} image={product.image} name={product.name} value={product.value} key={index} />)
            })}
        </div>
    )
}

export default ProductList