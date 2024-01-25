import { useEffect, useState } from "react";
import styles from './ProductScreen.module.css';
import ProductServices from "../services/product/product_services";

const ProductServicesInstance = new ProductServices();

function ProductFormScreen({navigateTo}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    /** VALIDATIONS */
    const [isTitleValid, setIsTitleValid] = useState(true);

    /** STATUSES */
    const [isSuccessful, setisSuccessful] = useState(false);
    const [isErrorOccured, setIsErrorOccured] = useState(false);

    const onCreateProductHandler = async () => {
        // RESET ERROR
        setIsErrorOccured(false);
        setIsTitleValid(true);
        // VALIDATIONS
        if(title == "") {
            setIsTitleValid(false);
            return;
        }
        // API REQUEST
        const response = await ProductServicesInstance.createProduct(title, price, description, image, category);
        if(response.status == 200) {
            // SET SUCCESS
            setisSuccessful(true);
        } else {
            // SET ERROR
            setisSuccessful(false);
            setIsErrorOccured(true);
        }
    }

    return <div>
        <div>PRODUCT FORM SCREEN</div>
        {isErrorOccured && <div>Something went wrong</div>}
        {isSuccessful && <div style={{color: "green"}}>Successfully Created</div>}

        <div><input placeholder="Title" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/></div>
        {!isTitleValid && <div style={{ fontSize: 10, color: "red"}}>Title is required</div>}
        <div><input placeholder="Price" type="number" value={price} onChange={(event) => setPrice(event.target.value)}/></div>
        <div><input placeholder="Description" type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></div>
        <div><input placeholder="Image" type="text" value={image} onChange={(event) => setImage(event.target.value)}/></div>
        <div><input placeholder="Category" type="text" value={category} onChange={(event) => setCategory(event.target.value)}/></div>

        <div><button onClick={() => onCreateProductHandler()}>Add New Product</button></div>
    </div>
}

export default ProductFormScreen;