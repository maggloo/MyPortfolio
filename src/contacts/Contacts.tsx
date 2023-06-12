import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";

const validate = {
    email: Yup.string().email('Invalid email').required('Required'),
}

const emailSchema = Yup.object().shape({
    email: validate.email,
})

const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validationSchema: emailSchema,

        onSubmit: values => {
            axios.post('http://localhost:3010/sendMessage', {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
            })
        },
    })

    return (
        <Fade triggerOnce>
            <div className={styles.contactsBlock} id={'ContactMe'}>
                <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                    <Title title={'Get In Touch'}/>
                    <form className={styles.form} onSubmit={formik.handleSubmit}>
                        <div className={styles.inputsWrapper}>
                            <input type='text' size={40} placeholder={'Your name'} {...formik.getFieldProps('name')}
                                   className={styles.input}></input>
                            <input type='text' placeholder={`Email address`} {...formik.getFieldProps('email')}
                                   className={`${styles.input} ${formik.touched.email && formik.errors.email && styles.error}`}></input>
                            {formik.touched.email && formik.errors.email && (
                                <span className={styles.textError}>{formik.errors.email}</span>
                            )}
                        </div>
                        <input type='text' placeholder={'Subject'} {...formik.getFieldProps('subject')}
                               className={styles.input}></input>
                        <textarea placeholder={'Message'} cols={40} rows={5} {...formik.getFieldProps('message')}
                                  className={styles.input + ' ' + styles.textarea}/>
                        <p>Don't like forms? Send me an <a href={'mailto:rprivalko@gmail.com'}
                                                           className={styles.emailLink}>email</a>!</p>
                        <button className={styles.sendForm} type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </Fade>
    );
};

export default Contacts;
