import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import profilePhoto from '../assets/imgs/background/TE_AMO_RITA_sayago.png';
import Particle from "../common/components/particle/Particle";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";
import Button from "@mui/material/Button";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-scroll";

const Main = () => {
    return (
        <div className={styles.mainBlock} id={'Main'}>
            <Particle/>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <Fade triggerOnce direction={'down'}><span>Hello,</span></Fade>
                    <Fade triggerOnce delay={500} direction={'down'}><h2>I am Margarita Privalko</h2></Fade>
                    <Fade triggerOnce delay={1000} direction={'down'}>a <ReactTypingEffect
                        text={["a Front-End developer"]}
                        className={styles.highlight}
                        speed={100}
                        typingDelay={1500}
                    />
                    </Fade>
                    <Fade triggerOnce direction={'down'} delay={500}>
                    <div className={styles.buttonGroup}>
                        <Button variant={'contained'}
                                startIcon={<MailIcon/>}
                                className={styles.button}
                        >
                             <Link to="ContactMe" smooth={true}>
                                Contact Me
                             </Link>
                        </Button>
                        <Button variant={'contained'}
                                href={'https://drive.google.com/file/d/16xH-G9ixNLfPfx8DWSNibCMbZsTu9-eK/view?usp=drive_link&export=download'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                                startIcon={<ContactPageIcon/>}>
                                   My CV
                        </Button>
                    </div>
                    </Fade>
                </div>
                <div className={styles.photo}>
                    <Fade triggerOnce direction={'down'}>
                        <img src={profilePhoto} alt={'profile pic'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Main;
