import React from 'react';
import styles from './Header.module.scss';
import Nav from "../nav/Nav";
import {styleNavType} from "../App";


const Header = (props: {style: styleNavType | {}}) => {
    return (
        <div className={styles.header} style={props.style}>
            <Nav />
        </div>
    );
};

export default Header;