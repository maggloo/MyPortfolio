import React from 'react';
import styles from './Project.module.scss';
import {Fade} from "react-awesome-reveal";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type ProjectPropsType = {
    style: {
        backgroundImage: string
    }
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <Fade triggerOnce direction={"up"} className={styles.project}>
            <div>
                <div className={styles.img} style={props.style}>
                    <Button variant="contained"
                            sx={{width: '150px', bgcolor: 'primary.main',}}
                            endIcon={<ArrowOutwardIcon/>}>
                        Visit
                    </Button>
                </div>
                <div className={styles.descriptionAndTitle}>
                    <h4 className={styles.title}>{props.title}</h4>
                    <span className={styles.description}>
                    {props.description}
                </span>
                </div>
            </div>
        </Fade>
    );
};

export default Project;
