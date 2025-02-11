"use client"
import { useEffect, useState } from "react"
import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductForm from "../organisms/ProductForm"
import getProductById from "@/services/api/getProductById"

const EditProductPage: React.FC<{ productId: string }> = (props) => {
    const [product, setProduct] = useState<IProduct>()
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await getProductById(props.productId)
            setProduct({
                description: result.description,
                id: result.id.toString(),
                image: result.image,
                name: result.name,
                value: result.value
            })
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen h-screen">
                <div>
                    <h1 className="font-semibold text-3xl">Editar produto X</h1>
                </div>
                {!isLoading && <ProductForm product={product} />}
            </div>
        </div>
    )
}

export default EditProductPage