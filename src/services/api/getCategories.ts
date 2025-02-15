const getCategories = async (): Promise<ICategory[]> => {
    const response = await fetch("http://localhost:3001/category")

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default getCategories