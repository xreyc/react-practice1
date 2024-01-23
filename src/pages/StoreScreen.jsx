import { useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import ProductItem2 from "./ProductItem2";

function StoreScreen({navigateTo, data1}) {
    const [productList, setProductList] = useState([
        {id: 1, name: 'Candy', price: 20},
        {id: 2, name: 'Candy', price: 20},
        {id: 3, name: 'Candy', price: 20},
        {id: 4, name: 'Candy', price: 20},
        {id: 5, name: 'Candy', price: 20},
    ]);

    const ssss = <div>HHHHHHHHHHHHHHHHH</div>


    
    useEffect(() => {
    }); // ALWAYS TRIGGER ON EVERY STATE CHANGE
    useEffect(() => {}, []); // RUNS ONLY ONCE ON LOAD
    useEffect(() => {}, [productList]); // RUNS ONLY IF PRODUCT LIST STATE CHANGES

    useEffect(() => {
        // RUNS BEFORE THE SCREEN CHANGES
        return () => {
        }
    }, [])
    

    return <div>
        <div>STORE SCREEN</div>

        
        {productList.map(productItem => <ProductItem2
            key={productItem['id']}
            productItem={productItem}
            inputElement={ssss}
            data1={data1}
        />   
        )}


        <button onClick={() => navigateTo(1)}>Goto Product</button>
    </div>
}

export default StoreScreen;