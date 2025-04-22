import Link from "next/link"
import { useState } from "react"
import Modal from "./Modal"
import deleteProduct from "@/services/api/deleteProduct"
import toast from "react-hot-toast"
import deleteProductCategory from "@/services/api/deleteProductCategory"

const ProductCard: React.FC<{ name: string, value: number, image: string, id: number }> = (props) => {
    const { name, value, image, id } = props
    const [isModal, setIsModal] = useState<boolean>(false)

    const handleClickModal = () => {
        setIsModal(!isModal)
    }

    const handleDeleteProduct = async () => {
        try {
            await deleteProductCategory(id)
            await deleteProduct(id)
            toast.success('Produto deletado')
            handleClickModal()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao deletar produto")
        }
    }

    return (
        <>
            {isModal && <Modal handleClickButton={handleClickModal}>
                <div className="flex flex-col items-center gap-5">
                    <img className="w-14" src="/images/trash-modal.png" alt="trash image" />
                    <p className="font-medium">Tem certeza que deseja excluir o produto?</p>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                    <button onClick={handleClickModal} className="py-1 px-6 rounded-md font-medium border-gray-600 border shadow-md">Cancelar</button>
                    <button onClick={handleDeleteProduct} className="bg-red-600 py-1 px-6 text-white font-medium rounded-md shadow-md">Deletar</button>
                </div>
            </Modal>}
            <div className="bg-white rounded-lg px-7 py-5 flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <img className="w-20 h-20 rounded-md shadow-md" src={image} alt="product" />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p>R${value}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href={`/backoffice/products/${id}`}><img className="w-7 h-7 cursor-pointer" src="/images/editing.png" alt="edit icon" /></Link>
                    <img onClick={handleClickModal} className="w-6 h-6 cursor-pointer" src="/images/black-delete.png" alt="delete icon" />
                </div>
            </div>
        </>
    )
}

export default ProductCard