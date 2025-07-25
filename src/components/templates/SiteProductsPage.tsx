'use client'
import { usePathname } from "next/navigation"
import SiteNavBar from "../organisms/SiteNavBar"
import SiteProductCard from "../molecules/SiteProductCard"

const SiteProductsPage = () => {
    const pathname = usePathname()

    return (
        <div className="bg-[#faefef] h-full">
            <SiteNavBar />
            <div className="flex justify-center mt-10">
                <SiteProductCard />
            </div>
        </div>
    )
}

export default SiteProductsPage