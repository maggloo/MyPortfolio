import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contact Me'}/>
                <form className={styles.form}>
                    <input type='text'></input>
                    <input type='text'></input>
                    <textarea/>
                    <button className={styles.sendForm} type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;