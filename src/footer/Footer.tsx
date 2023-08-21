import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";
import SocialMedia from "../common/components/social media/SocialMedia";


const Footer = () => {
    return (
        <Fade triggerOnce>
            <div className={styles.footerBlock}>
                <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                    <h2 className={styles.title}>Margarita Privalko</h2>
                    <SocialMedia/>
                    <span>@ All Rights Reserved</span>
                </div>
            </div>
        </Fade>
    );
};

export default Footer;
