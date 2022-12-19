import React from 'react';
import styles from './Skill.module.scss';

const Skill = (props: any) => {

    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={props.style}></div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;