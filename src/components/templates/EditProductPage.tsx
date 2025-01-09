import SaveButton from "../atoms/SaveButton"
import BackofficeNavBar from "../organisms/BackofficeNavBar"

const EditProductPage = () => {
    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen h-screen">
                <div className="flex justify-between w-4/5 items-center">
                    <h1 className="font-semibold text-3xl">Editar produto X</h1>
                    <SaveButton />
                </div>
            </div>
        </div>
    )
}

export default EditProductPage