import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import TextField from '@mui/material/TextField';
import {useFormStore} from "../store/formStore";

const validate = {
    email: Yup.string().email('Invalid email').required('Required'),
}

const emailSchema = Yup.object().shape({
    email: validate.email,
})

const Contacts = () => {

    const sendForm = useFormStore(state => state.sendForm)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validationSchema: emailSchema,

        onSubmit: values => {
            sendForm({
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

                            <TextField sx={{
                                width: '100%',
                                height: '60px',
                            }} {...formik.getFieldProps('name')}
                                       color="secondary"
                                       label="Your name"
                                       variant="outlined"/>

                            <TextField sx={{
                                width: '100%',
                                height: '60px',
                            }} {...formik.getFieldProps('email')}
                                       color="secondary"
                                       label="Email address"
                                       variant="outlined"
                                       error={!!(formik.touched.email && formik.errors.email)}
                                       helperText={formik.errors.email}
                                       required
                            />

                        </div>

                        <TextField {...formik.getFieldProps('subject')}
                                   color="secondary"
                                   label="Subject"
                                   variant="outlined"/>

                        <TextField {...formik.getFieldProps('message')}
                                   rows={5}
                                   color="secondary"
                                   label="Message"
                                   multiline
                                   variant="outlined"/>

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
