const getCategoryByProduct = async (productId: string): Promise<IProductCategory[]> => {
    const response = await fetch(`http://localhost:3001/product-category?productId=${productId}`)

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default getCategoryByProduct