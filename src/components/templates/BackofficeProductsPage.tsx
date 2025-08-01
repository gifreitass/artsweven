import AddButton from "../atoms/AddButton"
import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductList from "../organisms/ProductList"

const ProductsPage = () => {
    return (
        <div className="flex h-full">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-full">
                <div className="flex justify-between w-4/5">
                    <h1 className="font-semibold text-3xl">Produtos</h1>
                    <AddButton />
                </div>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductsPage