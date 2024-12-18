import BackofficeNavBar from "../organisms/BackofficeNavBar"
import ProductsPage from "../organisms/ProductsPage"

const BackofficeHomepage = () => {
    return (
        <div className="mx-10 my-6 flex">
            <BackofficeNavBar />
            <ProductsPage />
        </div>
    )
}

export default BackofficeHomepage