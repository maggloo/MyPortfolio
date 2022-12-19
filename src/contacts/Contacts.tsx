import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Get In Touch'}/>
                <form className={styles.form}>
                    <div className={styles.inputsWrapper}>
                        <input type='text' size={40} placeholder={'Your name'} className={styles.input}></input>
                        <input type='text' placeholder={'Email address'} className={styles.input}></input>
                    </div>
                    <input type='text' placeholder={'Subject'} className={styles.input}></input>
                    <textarea placeholder={'Message'} cols={40} rows={5} className={styles.input + ' ' + styles.textarea}/>
                    <p>Don't like forms? Send me an <a href={'mailto:rprivalko@gmail.com'} className={styles.emailLink}>email</a>!</p>
                    <button className={styles.sendForm} type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;