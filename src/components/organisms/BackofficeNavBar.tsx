import BackofficeNavItems from "../atoms/BackofficeNavItems"

const BackofficeNavBar = () => {
    return (
        <nav className="flex flex-col gap-4 w-1/6">
            <img src="/images/nuvemshop-logo.png" alt="logo nuvemshop" className="w-44" />
            <div className="pl-3 gap-4 flex flex-col">
                <BackofficeNavItems image="/images/price.png">Pedidos</BackofficeNavItems>
                <BackofficeNavItems image="/images/label.png">Produtos</BackofficeNavItems>
                <BackofficeNavItems image="/images/category.png">Categorias</BackofficeNavItems>
            </div>
        </nav>
    )
}

export default BackofficeNavBar