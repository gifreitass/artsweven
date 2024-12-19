const ProductCard = () => {
    return (
        <div className="bg-white rounded-lg px-7 py-5 flex gap-6 items-center">
            <img className="w-20 h-20 rounded-md shadow-md" src="https://acdn.mitiendanube.com/stores/001/661/511/products/version1uuid87ec0c9f-cc1c-4045-9554-452e0e6550dfmodecompatiblenoloc01-f1a926acdbe5d5941b16838533684401-1024-1024.webp" alt="product" />
            <div>
                <p className="font-medium">luminária affection</p>
                <p>R$80</p>
            </div>
        </div>
    )
}

export default ProductCard