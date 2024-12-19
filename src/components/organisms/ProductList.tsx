import ProductCard from "../molecules/ProductCard"

const ProductList = () => {
    return (
        <div className="flex flex-col gap-7 mt-10 w-4/5">
            {/* map para gerar um card por produto */}
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductList