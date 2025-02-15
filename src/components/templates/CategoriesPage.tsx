import BackofficeNavBar from "../organisms/BackofficeNavBar"
import EditCategories from "../organisms/EditCategories"

const CategoriesPage = () => {
    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen h-screen">
                <div className="w-1/4 gap-10 flex flex-col">
                    <h1 className="font-semibold text-3xl">Categorias</h1>
                    <EditCategories />
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage