import getProducts from "@/services/api/getProducts"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useProductList = () => {
    const [products, setProducts] = useState<IProduct[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        try {
            const fetchData = async () => {
                setLoading(true)
                const result = await getProducts()
                setLoading(false)
                setProducts(result)
            }
            fetchData()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao obter produtos")
        }
    }, [])

    return { products, loading }
}

export default useProductList