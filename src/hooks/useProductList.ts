import getProducts from "@/services/api/getProducts"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetch = async () => {
        try {
            setLoading(true)
            const result = await getProducts()
            setLoading(false)
            setProducts(result)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao obter produtos")
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return { products, loading, fetch }
}

export default useProductList