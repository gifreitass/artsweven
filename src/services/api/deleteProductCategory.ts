const deleteProductCategory = async (productId: number) => {
    const response = await fetch(`http://localhost:3001/product-category?productId=${productId}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error.message);
    }

    return true
}

export default deleteProductCategory