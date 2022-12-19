import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = (props: any) => {

    const backGroundImg = {

    }

    return (
        <div style={backGroundImg} className={styles.wrapperClass} >
            {props.children}
        </div>
    );
};

export default Wrapper;