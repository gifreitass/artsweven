const adaptProductDb = (product: IProductDb): IProduct => {
    return {
        id: product.id.toString(),
        name: product.name,
        description: product.description,
        image: product.image,
        value: product.value
    }
}

export default adaptProductDb