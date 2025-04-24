import getProductById from "@/services/api/getProductById"
import { useEffect, useState } from "react"

const useProduct = (productId: string) => {
    const [product, setProduct] = useState<IProduct>()
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (productId === 'create') {
            return
        }
        const fetchData = async () => {
            setLoading(true)
            const result = await getProductById(productId)
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
    }, [productId])
    
    return { product, isLoading }
}

export default useProduct