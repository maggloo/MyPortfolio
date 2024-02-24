import React from 'react';
import styles from './Project.module.scss';
import {Fade} from "react-awesome-reveal";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Tilt} from "react-tilt";

type ProjectPropsType = {
    style: {
        backgroundImage: string
    }
    title: string
    description: string
    link: string
    hashtags: string[]
}

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            10,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter
}

const Project = (props: ProjectPropsType) => {

    return (
        <Tilt options={defaultOptions}>
        <Fade triggerOnce direction={"up"} className={styles.project}>
            <div>
                <div className={styles.img} style={props.style}>
                    <Button variant="contained"
                            sx={{width: '150px', bgcolor: 'primary.main',}}
                            endIcon={<ArrowOutwardIcon/>}
                            href={props.link}
                            target={'_blank'}
                    >
                        Visit
                    </Button>
                </div>
                <div className={styles.descriptionAndTitle}>
                    <h4 className={styles.title}>{props.title}</h4>
                    <span className={styles.description}>
                    {props.description}
                    </span>
                    <div className={styles.hashtags}>
                        { props.hashtags.map(el => {
                            return <span> #{el} </span>
                        })}
                    </div>
                </div>
            </div>
        </Fade>
        </Tilt>
    );
};

export default Project;
