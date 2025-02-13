import Link from "next/link"

const AddButton: React.FC<{ item: string }> = (props) => {
    return (
        <>
            {props.item === 'product' ? <Link href='/backoffice/products/create'>
                <button className="flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md">
                    <img className="w-6" src="/images/add.png" alt="add icon" />
                    <p className="text-white font-medium">Adicionar produto</p>
                </button>
            </Link> :
                <Link href='/backoffice/categories/create'>
                    <button className="flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md">
                        <img className="w-6" src="/images/add.png" alt="add icon" />
                        <p className="text-white font-medium">Adicionar categoria</p>
                    </button>
                </Link>}
        </>

    )
}

export default AddButton