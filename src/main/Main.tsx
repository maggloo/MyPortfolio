import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import profilePhoto from '../assets/imgs/woman-web-developer-8184991-6547024.webp';
import Particle from "../common/components/particle/Particle";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";
import {Tilt} from 'react-tilt';

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter
}

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
                        <Tilt options={defaultOptions}>
                            <img src={profilePhoto} alt={'profile pic'}/>
                        </Tilt>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Main;
