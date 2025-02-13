import AddButton from "../atoms/AddButton"
import BackofficeNavBar from "../organisms/BackofficeNavBar"

const CategoriesPage = () => {
    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen">
                <div className="flex justify-between w-4/5">
                    <h1 className="font-semibold text-3xl">Categorias</h1>
                    <AddButton item="category" />
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage