interface PostCreateProductCategory {
    categoryId: number,
    productId: number
}

const postCreateProductCategory = async (productCategory: PostCreateProductCategory) => {
    const response = await fetch("http://localhost:3001/product-category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productCategory)
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default postCreateProductCategory