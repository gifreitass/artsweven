"use client"
import useCategoryByProduct from "@/hooks/useCategoryByProduct"
import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductForm from "../organisms/ProductForm"
import useProduct from "@/hooks/useProduct"

const EditProductPage: React.FC<{ productId: string }> = (props) => {
    const { isLoading: isLoadingProduct, product } = useProduct(props.productId)
    const { isLoading: isLoadingCategory, category } = useCategoryByProduct(props.productId)
    console.log(category, props.productId)
    //pegar a categoria pelo produto
    return (
        <div className="flex">
            <BackofficeNavBar />
            <div className="px-20 py-14 bg-gray-100 w-screen h-full">
                <div>
                    {props.productId === 'create' ? <h1 className="font-semibold text-3xl">Criar produto</h1> :
                        <h1 className="font-semibold text-3xl">Editar {product?.name}</h1>}
                </div>
                {!isLoadingProduct && !isLoadingCategory && <ProductForm productId={props.productId} product={product} />}
            </div>
        </div>
    )
}

export default EditProductPage