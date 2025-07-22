import SiteSearchBarOption from "../atoms/SiteSearchBarOption"

const SiteNavBar = () => {
    return (
        <nav className="bg-black py-2 px-6 gap-4 flex flex-col">
            <div className="flex w-4/6 justify-between">
                <div className="flex gap-4">
                    <img className="w-3 h-3" src="/images/instagram.png" alt="instagram icon" />
                    <img className="w-3 h-3" src="/images/facebook-app-symbol.png" alt="facebook icon" />
                    <img className="w-3 h-3" src="/images/tik-tok.png" alt="tiktok icon" />
                </div>
                <p className="text-white text-xs">frete grátis para SP nas compras acima de R$150, e para o Sul e Sudeste nas compras acima de R$250!</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between w-3/4">
                    <img src="/images/logo.png" alt="art sweven logo" className="w-44" />
                    <input type="text" className="w-2/3 p-2 rounded-md text-sm" placeholder="O que você está buscando?" />
                </div>
                <div>
                    <div className="flex gap-16">
                        <SiteSearchBarOption image="/images/chat.png" imageDescription="chat icon" title="Atendimento" />
                        <SiteSearchBarOption image="/images/user.png" imageDescription="user icon" title="Minha conta" />
                        <SiteSearchBarOption image="/images/shopping-cart.png" imageDescription="cart icon" title="Meu carrinho" />
                    </div>
                </div>
            </div>
            <div>
                {/* páginas do site */}
            </div>
        </nav>
    )
}

export default SiteNavBar