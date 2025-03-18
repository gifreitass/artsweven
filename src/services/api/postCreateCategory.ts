interface postCreateCategory {
    name: string,
    enabled?: boolean
}

const postCreateCategory = async (category: postCreateCategory): Promise<ICategory> => {
    const response = await fetch("http://localhost:3001/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default postCreateCategory