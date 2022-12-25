import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import profilePhoto from '../assets/imgs/background/ProfilePic.jpg'

const Main = () => {
    return (
        <div className={styles.mainBlock} id={'Main'}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hello,</span>
                    <h2>I am Margarita Privalko</h2>
                    <p>a <span className={styles.highlight}>Front-End developer</span></p>
                </div>
                <div className={styles.photo}>
                    <img src={profilePhoto} alt={'profile pic'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;