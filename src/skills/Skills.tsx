import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImg from "../assets/imgs/skillsSVG/js-svgrepo-com.svg";
import reactImg from "../assets/imgs/skillsSVG/react-svgrepo-com.svg";
import scss from "../assets/imgs/skillsSVG/scss2.svg";
import figma from "../assets/imgs/skillsSVG/figma.svg";
import git from "../assets/imgs/skillsSVG/git.svg";
import html from "../assets/imgs/skillsSVG/html-5.svg";
import next from "../assets/imgs/skillsSVG/next-js.svg";
import redux from "../assets/imgs/skillsSVG/redux.svg";
import tailwind from "../assets/imgs/skillsSVG/tailwind.svg";
import typescript from "../assets/imgs/skillsSVG/typescript.svg";
import cssImg from "../assets/imgs/skillsSVG/css-3-svgrepo-com.svg";
import zustand from "../assets/imgs/skillsSVG/zustand1.png";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
    const addBackgroundImage = (img: string) => {
        return {
            backgroundImage: 'url(' + img + ')'
        }
    }


    return (
        <Fade triggerOnce>
            <div className={styles.skillsBlock} id={'Skills'}>
                <div className={`${styleContainer.container} ${styles.skillContainer}`}>
                    <Title title={'Skills'}/>
                    <div className={styles.skills}>
                        <Skill title={'HTML'}
                               style={addBackgroundImage(html)}/>
                        <Skill title={'CSS'}
                               style={addBackgroundImage(cssImg)}/>
                        <Skill title={'Javascript'}
                               style={addBackgroundImage(jsImg)}/>
                        <Skill title={'Typescript'}
                               style={addBackgroundImage(typescript)}/>
                        <Skill title={'React'}
                               style={addBackgroundImage(reactImg)}/>
                        <Skill title={'SCSS'}
                               style={addBackgroundImage(scss)}/>
                        <Skill title={'Next.js'}
                               style={addBackgroundImage(next)}/>
                        <Skill title={'Redux'}
                               style={addBackgroundImage(redux)}/>
                        <Skill title={'Zustand'}
                               style={addBackgroundImage(zustand)}/>
                        <Skill title={'Tailwind'}
                               style={addBackgroundImage(tailwind)}/>
                        <Skill title={'Git'}
                               style={addBackgroundImage(git)}/>
                        <Skill title={'Figma'}
                               style={addBackgroundImage(figma)}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Skills;
