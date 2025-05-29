interface IProduct {
    id: string,
    name: string,
    description: string,
    value: number,
    image: any
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

interface IProductCategory {
    category: ICategory,
    product: IProduct,
    id: number,
    categoryId: number,
    productId: number  
}