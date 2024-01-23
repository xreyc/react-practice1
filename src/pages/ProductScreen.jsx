import { useState } from "react";
import ProductItem from "./ProductItem";
import ProductItem2 from "./ProductItem2";

function ProductScreen({navigateTo}) {
    const [productList, setProductList] = useState([
        {id: 1, name: 'Candy', price: 20},
        {id: 2, name: 'Candy', price: 20},
        {id: 3, name: 'Candy', price: 20},
        {id: 4, name: 'Candy', price: 20},
        {id: 5, name: 'Candy', price: 20},
    ]);

    const ssss = <div>HHHHHHHHHHHHHHHHH</div>

    return <div>
        <div>PRODUCT SCREEN</div>


        {productList.map(productItem => <ProductItem2
            key={productItem['id']}
            productItem={productItem}
            inputElement={ssss}
        />   
        )}

        <button onClick={() => navigateTo(2)}>Goto Store</button>
    </div>
}

export default ProductScreen;