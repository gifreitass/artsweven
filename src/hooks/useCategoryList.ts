import getCategories from "@/services/api/getCategories"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useCategoryList = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await getCategories()
                setCategories(result)
            }
            fetchData()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao obter categorias")
        }
    }, [])

    const addCategory = (newCategory: ICategory) => {
        setCategories([...categories, newCategory])
    }

    const removeCategory = (categoryId: number) => {
        const removedCategory = categories.filter((category) => category.id !== categoryId)
        setCategories(removedCategory)
    }

    return { categories, addCategory, removeCategory }
}

export default useCategoryList