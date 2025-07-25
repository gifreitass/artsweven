const SiteProductCard = () => {
    return (
        <div>
            <img className="w-60 rounded-t-2xl" src="https://acdn-us.mitiendanube.com/stores/001/661/511/products/foto-7-d569e0f12eaca9a4da17472461921776-1024-1024.webp" alt="" />
            <div className="flex flex-col items-center border-gray-300 border-x-[1px] border-b-[1px] gap-3 pb-5 rounded-b-2xl">
                <p className="border-t-[3px] border-black w-full text-center pt-4 text-sm">chaveiro álbum</p>
                <div className="flex flex-col items-center">
                    <p className="text-lg"><b>R$35,00</b></p>
                    <p className="text-xs"><b>8 </b>x de <b>R$5,09</b></p>
                </div>
            </div>
        </div>
    )
}

export default SiteProductCard