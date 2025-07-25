'use client'
import useCategoryList from "@/hooks/useCategoryList"
import SiteSearchBarOption from "../atoms/SiteSearchBarOption"
import Link from "next/link"

const SiteNavBar = () => {
    const { categories } = useCategoryList()

    return (
        <nav className="bg-[#191815] py-2 gap-4 flex flex-col">
            <div className="flex w-4/6 justify-between px-6">
                <div className="flex gap-4">
                    <img className="w-3 h-3" src="/images/instagram.png" alt="instagram icon" />
                    <img className="w-3 h-3" src="/images/facebook-app-symbol.png" alt="facebook icon" />
                    <img className="w-3 h-3" src="/images/tik-tok.png" alt="tiktok icon" />
                </div>
                <p className="text-white text-[11px]">frete grátis para SP nas compras acima de R$150, e para o Sul e Sudeste nas compras acima de R$250!</p>
            </div>
            <div className="flex justify-between items-center px-6">
                <div className="flex items-center justify-between w-3/4">
                    <Link href='/'><img src="/images/logo.png" alt="art sweven logo" className="w-44" /></Link>
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
            {/* <div className="bg-white w-full h-[1px]"></div> */}
            <div className="text-white flex justify-evenly text-[13px] border-t-[1px] pt-3">
                {/* páginas do site com link para a página */}
                {categories && categories.map((category, index) => {
                    return <Link key={index} href={`/pages/${(category.id).toString()}`}><p>{category.name}</p></Link>
                })}
            </div>
        </nav>
    )
}

export default SiteNavBar