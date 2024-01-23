import styles from './Layout1.module.css'

function Layout1(props) {
    return (
        <div className={styles['layout1-container']}>
            <div>HEADER</div>
            <div className={styles['layout1-content-container']}>
                <div>SIDEBARD</div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Layout1;