import { useNavigate } from "react-router-dom";
import styles from './Layout1.module.css'

function Layout1(props) {
    const navigate = useNavigate();

    return (
        <div className={styles['layout1-container']}>
            <div className={styles['layout1-header']}>
                <div>HEADER</div>
                <div onClick={() => navigate("/")}>Products</div>
                <div onClick={() => navigate("/product_form")}>Add Product</div>
                <div onClick={() => navigate("/stores")}>Stores</div>
                <div onClick={() => navigate("/login")}>Login</div>
            </div>
            <div className={styles['layout1-content-container']}>
                <div>SIDEBARD</div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Layout1;