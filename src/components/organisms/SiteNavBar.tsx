'use client'
import useCategoryList from "@/hooks/useCategoryList"
import SiteSearchBarOption from "../atoms/SiteSearchBarOption"

const SiteNavBar = () => {
    const { categories } = useCategoryList()
    console.log(categories)

    return (
        <nav className="bg-[#191815] py-2 px-6 gap-4 flex flex-col">
            <div className="flex w-4/6 justify-between">
                <div className="flex gap-4">
                    <img className="w-3 h-3" src="/images/instagram.png" alt="instagram icon" />
                    <img className="w-3 h-3" src="/images/facebook-app-symbol.png" alt="facebook icon" />
                    <img className="w-3 h-3" src="/images/tik-tok.png" alt="tiktok icon" />
                </div>
                <p className="text-white text-[11px]">frete grátis para SP nas compras acima de R$150, e para o Sul e Sudeste nas compras acima de R$250!</p>
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
            <div className="bg-white w-screen h-[0.5px]"></div>
            <div className="text-white flex justify-evenly text-[13px]">
                {/* páginas do site com link para a página */}
                {categories && categories.map((category, index) => {
                    return <p key={index}>{category.name}</p>
                })}
            </div>
        </nav>
    )
}

export default SiteNavBar