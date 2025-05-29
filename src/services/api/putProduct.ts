interface PutCreateProduct {
    name: string,
    value: number,
    description: string,
}

const putProduct = async (productId: number, product: PutCreateProduct) => {
    const response = await fetch(`http://localhost:3001/product/${productId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result
}

export default putProduct 