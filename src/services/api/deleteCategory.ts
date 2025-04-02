const deleteCategory = async (categoryId: number) => {
    const response = await fetch(`http://localhost:3001/category/${categoryId}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error.message);
    }

    return true
}

export default deleteCategory