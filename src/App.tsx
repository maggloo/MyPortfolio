import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import styles from './common/components/wrapper/Wrapper.module.scss'

function App() {
    return (
        <div className="App">
            <div className={styles.wrapperClass + ' headerImg'}>
                <Header/>
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
