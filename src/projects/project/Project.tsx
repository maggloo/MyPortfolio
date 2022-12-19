import React from 'react';
import styles from './Project.module.scss';

const Project = (props: any) => {
    return (
        <div className={styles.project}>
            <div className={styles.img} style={props.style}>
                <a href={''} className={styles.link}>Visit</a>
            </div>
            <div className={styles.descriptionAndTitle}>
                <h4 className={styles.title}>{props.title}</h4>
                <span className={styles.description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default Project;