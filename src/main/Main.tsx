import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import profilePhoto from '../assets/imgs/background/TE_AMO_RITA_sayago.png';
import Particle from "../common/components/particle/Particle";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";

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
