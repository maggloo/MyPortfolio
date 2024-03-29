import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import styles from './common/styles/Wrapper.module.scss'
import {useFormStore} from "./store/formStore";
import CustomizedSnackbars from "./common/components/snackbar/Snackbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export type styleNavType = {
    backgroundColor: string,
    boxShadow: string,
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#a75fe7'
        },
    },
});


function App() {

    let [style, setStyle] = useState<styleNavType | {}>({
        backgroundColor: 'transparent',
        boxShadow: 'none',
    })

    const status = useFormStore(state => state.status)

    useEffect(() => {
        const handleScroll = (e: Event) => {
            if (window.scrollY <= 10) {
                setStyle({
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                })
            } else {
                setStyle({})
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className={styles.wrapperClass + ' headerImg'}>
                    <Header style={style}/>
                    <Main/>
                </div>
                <Skills/>
                <Projects/>
                <div className={styles.wrapperClass + ' footerImg'}>
                    <Contacts/>
                    <Footer/>
                </div>
                {status && <CustomizedSnackbars severity={status}
                                                text={status && status !== 'error' ? 'Your message has been sent!' : 'Some error occurred'}/>}
            </div>
        </ThemeProvider>
    );
}

export default App;
