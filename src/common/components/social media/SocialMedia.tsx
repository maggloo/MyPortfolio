import React from 'react';
import styles from "../../../footer/Footer.module.scss";
import {IconButton} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialMedia = () => {
    return (
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
    );
};

export default SocialMedia;
