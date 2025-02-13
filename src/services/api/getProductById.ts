import adaptProductDb from "@/shared/adapters/adaptProductDb"

const getProductById = async (id: string) : Promise<IProduct> => {
    const response = await fetch(`http://localhost:3001/product/${id}`)

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    const adaptedProduct = adaptProductDb(result.data)
    return adaptedProduct
}

export default getProductById