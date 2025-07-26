const SiteProductCard = () => {
    return (
        <div className="cursor-pointer">
            <img className="w-60 rounded-t-2xl" src="https://acdn-us.mitiendanube.com/stores/001/661/511/products/foto-7-d569e0f12eaca9a4da17472461921776-1024-1024.webp" alt="" />
            <div className="flex flex-col items-center border-gray-300 border-x-[1px] border-b-[1px] gap-3 pb-5 rounded-b-2xl">
                <p className="border-t-[3px] border-black w-full text-center pt-4 text-sm">chaveiro álbum</p>
                <div className="flex flex-col items-center">
                    <p className="text-lg"><b>R$35,00</b></p>
                    <p className="text-xs"><b>8 </b>x de <b>R$5,09</b></p>
                </div>
                <div className="flex text-[9px] gap-3 font-bold overflow-hidden">
                    <button className="bg-black text-white px-6 py-2 rounded-3xl">COMPRAR</button>
                    <button className="px-5 py-2 rounded-3xl border-black border-[1px] flex items-center gap-1">
                        <img className="w-3" src="/images/view.png" alt="eye icon" />ESPIAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SiteProductCard