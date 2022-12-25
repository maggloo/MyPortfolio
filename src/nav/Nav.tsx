import React, {useState} from 'react';
import styles from './Nav.module.scss';
import burgerIcon from '../assets/imgs/utils/burger.svg'
import closeIcon from '../assets/imgs/utils/closeOutline.svg'

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
                <a href={"#Main"} onClick={closeMenu}>Main</a>
                <a href={"#Skills"} onClick={closeMenu}>Skills</a>
                <a href={"#Projects"} onClick={closeMenu}>Projects</a>
                <a href={"#ContactMe"} onClick={closeMenu}>Contact Me</a>
                <img
                    src={closeIcon}
                    alt="close sidebar"
                    id={'hw5-menu-close'}
                    className={styles.closeIcon}
                    onClick={handleToggle}
                />
            </div>
        </div>
    );
};

export default Nav;