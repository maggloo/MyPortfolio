import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImg from "../assets/imgs/js-svgrepo-com.svg";
import reactImg from "../assets/imgs/react-svgrepo-com.svg";
import cssImg from "../assets/imgs/css-3-svgrepo-com.svg";

const Skills = () => {
    const reactSkillStyle = {
        backgroundImage: 'url(' + reactImg + ')'
    }
    const jsSkillStyle = {
        backgroundImage: 'url(' + jsImg + ')'
    }
    const cssSkillStyle = {
        backgroundImage: 'url(' + cssImg + ')'
    }

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'React'} style={reactSkillStyle} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'}/>
                    <Skill title={'JS'}  style={jsSkillStyle} description={'Lorem ipsum dolor sit amet consectetuer elit aenean commodo ligula eget.'}/>
                    <Skill title={'CSS'}  style={cssSkillStyle} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;