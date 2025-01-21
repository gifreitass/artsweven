import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductForm from "../organisms/ProductForm"

const EditProductPage = () => {
    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen h-screen">
                <div>
                    <h1 className="font-semibold text-3xl">Editar produto X</h1>
                </div>
                <ProductForm />
            </div>
        </div>
    )
}

export default EditProductPage