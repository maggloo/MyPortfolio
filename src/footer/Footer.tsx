import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Fade} from "react-awesome-reveal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Icon, IconButton} from "@mui/material";


const Footer = () => {
    return (
        <Fade triggerOnce>
            <div className={styles.footerBlock}>
                <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                    <h2 className={styles.title}>Margarita Privalko</h2>
                    <div className={styles.socialsWrapper}>
                        <div className={styles.social}>
                            <IconButton
                                href={'https://www.linkedin.com/in/margarita-privalko-6a6040240/'}
                                target={'_blank'}
                                sx={{
                                    transition: '0.2s all',
                                    '&:hover': {color: '#a75fe7', transition: '0.3s all'}
                                }}
                            >
                                <LinkedInIcon/>
                            </IconButton>
                        </div>
                        <div className={styles.social}>
                            <IconButton
                                href={'https://github.com/maggloo'}
                                target={'_blank'}
                                sx={{
                                    transition: '0.2s all',
                                    '&:hover': {color: '#a75fe7', transition: '0.3s all'}
                                }}
                            >
                                <GitHubIcon/>

                            </IconButton>
                        </div>
                        <div className={styles.social}>
                            <IconButton
                                href={'https://t.me/maggloo'}
                                target={'_blank'}
                                sx={{
                                    transition: '0.2s all',
                                    '&:hover': {color: '#a75fe7', transition: '0.3s all'}
                                }}
                            >
                                <TelegramIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <span>@ All Rights Reserved</span>
                </div>
            </div>
        </Fade>
    );
};

export default Footer;
