interface IProductDb {
    id: number,
    name: string,
    description: string,
    value: number,
    image: string
}

const getProductById = async (id: string) : Promise<IProductDb> => {
    const response = await fetch(`http://localhost:3001/product/${id}`)

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    return result.data
}

export default getProductById