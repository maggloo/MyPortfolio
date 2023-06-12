import React, {useState} from 'react';
import styles from './Nav.module.scss';
import burgerIcon from '../../assets/imgs/utils/burger.svg';
import { Link } from "react-scroll";

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <div className={styles.navBar}>
            <img
                src={burgerIcon}
                id={'hw5-burger-menu'}
                className={`${styles.burgIcon} ${navbarOpen ? `${styles.hideBtn}` : ""}`}
                onClick={handleToggle}
                alt={'open menu'}
            />
            <div className={`${styles.nav} ${navbarOpen ? ` ${styles.showMenu}` : ""}`}>
                <Link to="Main" smooth={true} activeClass={styles.active} offset={1} spy={true} onClick={closeMenu}>Main</Link>
                <Link to="Skills" smooth={true} activeClass={styles.active} offset={1} spy={true} onClick={closeMenu}>Skills</Link>
                <Link to="Projects" smooth={true} activeClass={styles.active} offset={1} spy={true} onClick={closeMenu}>Projects</Link>
                <Link to="ContactMe" smooth={true} activeClass={styles.active} offset={1} spy={true} onClick={closeMenu}>Contact Me</Link>
                <img
                    src={burgerIcon}
                    id={'hw5-menu-close'}
                    className={styles.closeIcon}
                    onClick={handleToggle}
                    alt={'open menu'}
                />
            </div>
        </div>
    );
};

export default Nav;
