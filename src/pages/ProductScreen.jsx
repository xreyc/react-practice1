import { useEffect, useState } from "react";
import styles from './ProductScreen.module.css';
import ProductServices from "../services/product/product_services";

const ProductServicesInstance = new ProductServices();

function ProductScreen({navigateTo}) {
    const [productList, setProductList] = useState([]);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isErrorOccured, setIsErrorOccured] = useState(false);

    // TRIGERED ONCES
    useEffect(() => {
        getProductsFromAPI();
    }, []);

    const getProductsFromAPI = async () => {
        const response = await ProductServicesInstance.getProducts();
        if(response.status == 200) {
            setProductList(response.data);
        }
    }

    /**
    API STATUSES:
    200 OK - successful
    403 Forbidden - admin lang makavisit sang page nga ni
    404 Not Found - hindi ga exist ang page
    400 Bad Request - mali ang request
    500 Internal Server Error - may nag error sa request
     */

    return <div>
        <div>PRODUCT SCREEN</div>

        {isErrorOccured && <div>Something went wrong</div>}

        <div className={styles['product-list']}>
            {productList.map(productItem => (
                <div key={productItem['id']} className={styles['product-item']}>
                    <div className={styles['product-image-wrap']}>
                        <img className={styles['product-image']} src={productItem['image']} />
                    </div>
                    <div>{productItem['title']}</div>
                </div> 
            ))}
        </div>
    </div>
}

export default ProductScreen;