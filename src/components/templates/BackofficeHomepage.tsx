import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductsPage from "./ProductsPage"

const BackofficeHomepage = () => {
    return (
        <div className="flex">
            <BackofficeNavBar />
            <ProductsPage />
        </div>
    )
}

export default BackofficeHomepage