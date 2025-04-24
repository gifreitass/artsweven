"use client"
import deleteProductCategory from "@/services/api/deleteProductCategory"
import ProductCard from "../molecules/ProductCard"
import useProductList from "@/hooks/useProductList"
import deleteProduct from "@/services/api/deleteProduct"
import toast from "react-hot-toast"

const ProductList = () => {
    const { products, loading, fetch } = useProductList()

    const handleDeleteProduct = async (id: number) => {
        try {
            await deleteProductCategory(id)
            await deleteProduct(id)
            toast.success('Produto deletado')
            fetch()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao deletar produto")
        }
    }

    return (
        <div className="flex flex-col gap-7 mt-10 w-4/5">
            {products && products.map((product, index) => {
                return (<ProductCard onDelete={handleDeleteProduct} id={Number(product.id)} image={product.image} name={product.name} value={product.value} key={index} />)
            })}
        </div>
    )
}

export default ProductList