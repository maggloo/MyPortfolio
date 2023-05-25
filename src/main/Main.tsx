import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import profilePhoto from '../assets/imgs/background/ProfilePic.jpg';
import Particle from "../common/components/particle/Particle";
import ReactTypingEffect from 'react-typing-effect';
import {Fade} from "react-awesome-reveal";
import {Tilt} from 'react-tilt';

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Main = () => {
    return (
        <div className={styles.mainBlock} id={'Main'}>
            <Particle/>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <Fade triggerOnce><span>Hello,</span></Fade>
                    <Fade triggerOnce delay={500}><h2>I am Margarita Privalko</h2></Fade>
                    <Fade triggerOnce delay={1000}>a <ReactTypingEffect
                        text={["a Front-End developer"]}
                        className={styles.highlight}
                        speed={100}
                        typingDelay={1500}
                    />
                    </Fade>
                </div>
                <div className={styles.photo}>
                    <Tilt options={defaultOptions} style={{height: 250, width: 250}}>
                        <div>👽</div>
                    </Tilt>
                    {/*<img src={profilePhoto} alt={'profile pic'}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Main;
