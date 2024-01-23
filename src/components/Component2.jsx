import React, { Fragment } from "react";
import styles from './Component4.module.css';
import styles2 from './Component2.module.css';

function Component2() {

    const element1 = <><div></div></>
    // is equivalent to
    const element2 = <React.Fragment><div></div></React.Fragment>
    // is equivalent also to
    const element3 = <Fragment><div></div></Fragment>

    return (
        <>
            <div>Component</div>
            <div> 2</div>
            <div className="testing1"></div>
            <div className={styles['testing3']}>sssssssssssssssssssssssssssss</div>
            <div className={styles2['testing3']}>6666666666666666666</div>
        </>
    );
    // this will return
    // <div></div>
    // <div></div>
    // <div></div>
}

export default Component2;