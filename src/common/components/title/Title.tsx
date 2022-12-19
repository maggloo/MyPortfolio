import React from 'react';
import styles from './Title.module.scss';

const Title = (props: {title: string, style?: { color: string }}) => {
    return (

        <div className={styles.title} style={props.style}>
            <h2>{props.title}</h2>
        </div>

    );
};

export default Title;