import React from 'react';
import styles from './Skill.module.scss';
import {Fade} from "react-awesome-reveal";

type SkillPropsType = {
    style: {
        backgroundImage: string
    }
    title: string
}

const Skill = (props: SkillPropsType) => {

    return (
        <Fade triggerOnce direction={"up"} className={styles.skill}>
            <div className={styles.skillItem}>
                <div className={styles.icon} style={props.style}></div>
                <h3 className={styles.title}>{props.title}</h3>
            </div>
        </Fade>
    );
};

export default Skill;
