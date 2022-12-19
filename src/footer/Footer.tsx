import React from 'react';
import styles from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Margarita Privalko</h2>
                <div className={styles.socialsWrapper}>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                    <div className={styles.social}></div>
                </div>
                <span>All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;