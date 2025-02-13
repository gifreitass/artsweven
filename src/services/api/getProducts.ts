import adaptProductDb from "@/shared/adapters/adaptProductDb"

const getProducts = async () : Promise<IProduct[]> => {
    const response = await fetch("http://localhost:3001/product")

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error.message)
    }

    const adaptedProducts = result.data.map((product: IProductDb) => {
        return adaptProductDb(product)
    })

    //código mais limpo:
    //const adaptedProducts = result.data.map(adaptProductDb)

    return adaptedProducts
}

export default getProducts