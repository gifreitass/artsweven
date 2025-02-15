interface IProduct {
    id: string,
    name: string,
    description: string,
    value: number,
    image: string
}

interface IProductDb {
    id: number,
    name: string,
    description: string,
    value: number,
    image: string
}

interface ICategory {
    id: number,
    name: string,
    enabled?: boolean
}
