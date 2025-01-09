import Link from "next/link"
import BackofficeNavItems from "../atoms/BackofficeNavItems"

const BackofficeNavBar = () => {
    return (
        <nav className="flex flex-col gap-4 w-1/6 px-10 py-6">
            <img src="/images/nuvemshop-logo.png" alt="logo nuvemshop" className="w-44" />
            <div className="pl-3 gap-4 flex flex-col">
                <Link href='/backoffice'><BackofficeNavItems image="/images/price.png">Pedidos</BackofficeNavItems></Link>
                <Link href='/backoffice/products'><BackofficeNavItems image="/images/label.png">Produtos</BackofficeNavItems></Link>
                <Link href='/backoffice'><BackofficeNavItems image="/images/category.png">Categorias</BackofficeNavItems></Link>
            </div>
        </nav>
    )
}

export default BackofficeNavBar