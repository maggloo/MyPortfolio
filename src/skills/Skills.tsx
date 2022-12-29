import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImg from "../assets/imgs/skillsSVG/js-svgrepo-com.svg";
import reactImg from "../assets/imgs/skillsSVG/react-svgrepo-com.svg";
import cssImg from "../assets/imgs/skillsSVG/css-3-svgrepo-com.svg";

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
        <div className={styles.skillsBlock} id={'Skills'}>
            <div className={`${styleContainer.container} ${styles.skillContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'React'}
                           style={reactSkillStyle}
                           description={'Good and detailed knowledge of React Hooks, life cycle of functional, class components, HOCs, FLUX architecture, React Router Dom 6.'}/>
                    <Skill title={'JS'}
                           style={jsSkillStyle}
                           description={'Good knowledge of native JavaScript, practical experience with MVC, Event Loop and DOM events.'}/>
                    <Skill title={'CSS'}
                           style={cssSkillStyle}
                           description={'Detailed work with Flexbox, Grid, SCSS.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;