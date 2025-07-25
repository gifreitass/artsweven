interface PostCreateProduct {
    name: string,
    value: number,
    description: string,
}

const postCreateProduct = async (product: PostCreateProduct): Promise<IProductDb> => {
    const response = await fetch("http://localhost:3001/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default postCreateProduct