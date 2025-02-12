const getProducts = async () : Promise<IProductDb[]> => {
    const response = await fetch("http://localhost:3001/product")

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default getProducts