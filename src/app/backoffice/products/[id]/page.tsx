"use client"
import EditProductPage from "@/components/templates/EditProductPage"
import { useParams } from "next/navigation"

type Params = {
    id: string
}

const EditProduct = () => {
    const params = useParams<Params>()

    return (
        <EditProductPage productId={params.id} />
    )
}

export default EditProduct