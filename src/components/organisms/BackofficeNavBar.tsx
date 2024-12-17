import Image from "next/image"
import BackofficeNavItems from "../atoms/BackofficeNavItems"

const BackofficeNavBar = () => {
    return (
        <nav className="flex flex-col gap-4">
            <Image alt="logo nuvemshop" src='/images/nuvemshop-logo.png' width={180} height={100} />
            <BackofficeNavItems>Pedidos</BackofficeNavItems>
            <BackofficeNavItems>Produtos</BackofficeNavItems>
            <BackofficeNavItems>Categorias</BackofficeNavItems>
        </nav>
    )
}

export default BackofficeNavBar