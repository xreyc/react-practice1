import { useEffect, useRef, useState } from "react";

function ProductScreen2({navigateTo}) {
    const [productList, setProductList] = useState([]);
    const [counter, setCounter] = useState(0);

    // EQUIVALENT TO DODUCMENT.GETELEMENTBYID
    const xElement = useRef();

    // TRIGERED EVERYTYIME A STATE CHANGES
    useEffect(() => {
        console.log("1111111111111111111");
        console.log(xElement);
    });

    // TRIGERED ONCES
    useEffect(() => {
        console.log("222222222222222222");
    }, []);

    // TRIGERED ONCE
    useEffect(() => {
        console.log("33333333333333333");
    }, [productList]);

    // BEFORE EXIT PAGE
    useEffect(() => {
        const eventTest = (event) => {
            console.log("EVENT TRIGGERED")
        }

        // ADD EVENT LISTENER
        xElement.current.addEventListener('click', eventTest);
        
        return () => {
            // REMOVE EVENT LISTENER
            xElement.current.removeEventListener('click', eventTest);
            console.log("555555555555555555555555");
        }
    }, [counter]);


    const onClickButton = () => {
        setCounter(prev => prev + 1);
        xElement.current.innerText = "REYCOOOOOOOOOOOOOOOOOOOO";
    }


    return <div>
        <div ref={xElement}>PRODUCT SCREEN</div>

        {productList.map(productItem => (
            <div>

            </div> 
        ))}


        {counter}


        <button onClick={() => onClickButton()}>Add 1</button>
    </div>
}

export default ProductScreen2;