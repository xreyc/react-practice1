import { useState} from "react";

function ProductItem2({productItem, inputElement, data1}) {
    const [isShowName, setisShowName] = useState(true);

    const onClickButton = () => {
        setisShowName(prev => !prev)
    }

    return <div>
        <div>{productItem['name']}</div>
        <div>{data1}</div>
        {isShowName && <div>{inputElement}</div>}
        <button onClick={() => onClickButton()}>Toogle</button>
    </div>
}

export default ProductItem2;