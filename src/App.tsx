import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import styles from './common/styles/Wrapper.module.scss'

export type styleNavType = {
    backgroundColor: string,
    boxShadow: string,
}

function App() {

    let [style, setStyle] = useState<styleNavType | {}>({
        backgroundColor: 'transparent',
        boxShadow: 'none',
    })

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
        </div>
    );
}

export default App;
