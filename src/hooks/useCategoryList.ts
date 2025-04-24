import getCategories from "@/services/api/getCategories"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useCategoryList = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetch = async () => {
        try {
            const result = await getCategories()
            setCategories(result)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao obter categorias")
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return { categories, fetch }
}

export default useCategoryList