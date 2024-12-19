import AddButton from "../atoms/AddButton"
import ProductList from "../organisms/ProductList"

const ProductsPage = () => {
    return (
        <div className="px-20 py-14 bg-gray-100 w-screen h-screen">
            <div className="flex justify-between w-4/5">
                <h1 className="font-semibold text-3xl">Produtos</h1>
                <AddButton />
            </div>
            <ProductList />
        </div>
    )
}

export default ProductsPage