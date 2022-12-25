import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import telegram from '../assets/imgs/socialsSvg/telegram-svgrepo-com.svg';
import whatsapp from '../assets/imgs/socialsSvg/whatsapp-svgrepo-com.svg';
import github from '../assets/imgs/socialsSvg/github-icon-1-logo-svgrepo-com.svg';

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Margarita Privalko</h2>
                <div className={styles.socialsWrapper}>
                    <div className={styles.social}>
                        <img src={telegram} className={styles.socialsImg}/>
                    </div>
                    <div className={styles.social}>
                        <img src={github} className={styles.socialsImg}/>
                    </div>
                    <div className={styles.social}>
                        <img src={whatsapp} className={styles.socialsImg}/>
                    </div>
                </div>
                <span>@ All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;