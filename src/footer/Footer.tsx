import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import telegram from '../assets/imgs/socialsSVG/telegram-svgrepo-com.svg';
import whatsapp from '../assets/imgs/socialsSVG/whatsapp-svgrepo-com.svg';
import github from '../assets/imgs/socialsSVG/github-icon-1-logo-svgrepo-com.svg';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <Fade triggerOnce>
            <div className={styles.footerBlock}>
                <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                    <h2 className={styles.title}>Margarita Privalko</h2>
                    <div className={styles.socialsWrapper}>
                        <div className={styles.social}>
                            <img alt='' src={telegram} className={styles.socialsImg}/>
                        </div>
                        <div className={styles.social}>
                            <img alt='' src={github} className={styles.socialsImg}/>
                        </div>
                        <div className={styles.social}>
                            <img alt='' src={whatsapp} className={styles.socialsImg}/>
                        </div>
                    </div>
                    <span>@ All Rights Reserved</span>
                </div>
            </div>
        </Fade>
    );
};

export default Footer;
