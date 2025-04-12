import getCategoryByProduct from "@/services/api/getCategoryByProduct"
import { useEffect, useState } from "react"

//tipar id e o state da categoria
const useCategoryByProduct = (productId: string) => {
    const [ category, setCategory ] = useState<ICategory[]>()
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await getCategoryByProduct(productId)
            const onlyCategories = result.map((productCategory) => {
                return productCategory.category
            })
            setCategory(onlyCategories)
            setLoading(false)
        }
        fetchData()
    }, [productId])

    return { category, isLoading  }
}

export default useCategoryByProduct