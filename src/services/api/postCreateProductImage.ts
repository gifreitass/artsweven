const postCreateProductImage = async (formData: any, productId: number) => {
    const response = await fetch(`http://localhost:3001/product-image/${productId}`, {
        method: "POST",
        body: formData
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default postCreateProductImage