import Link from "next/link"

const ProductCard: React.FC<{ name: string, value: number, image: string }> = (props) => {
    const { name, value, image } = props
            
    return (
        <div className="bg-white rounded-lg px-7 py-5 flex justify-between items-center">
            <div className="flex gap-6 items-center">
                <img className="w-20 h-20 rounded-md shadow-md" src={image} alt="product" />
                <div>
                    <p className="font-medium">{name}</p>
                    <p>R${value}</p>
                </div>
            </div>
            <div>
                <Link href="/backoffice/products/id"><img className="w-7 cursor-pointer" src={"/images/editing.png"} alt="edit icon" /></Link>
            </div>
        </div>
    )
}

export default ProductCard