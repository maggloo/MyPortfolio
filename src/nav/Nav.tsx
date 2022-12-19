import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact Me</a>
        </div>
    );
};

export default Nav;