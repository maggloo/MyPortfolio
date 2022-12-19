import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import imgSocial from "../assets/imgs/types-of-social-media.png";
import imgTodo from "../assets/imgs/daily-hourly-schedule-and-do-list-template.jpg";

const Projects = () => {
    const socialStyle = {
        backgroundImage: 'url(' + imgSocial + ')',
    };

    const todolistStyle = {
        backgroundImage: 'url(' + imgTodo + ')',
    }
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={styles.projects}>
                    <Project style={socialStyle} title={'Social Network'} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget elit aenean commodo ligula eget elit aenean commodo ligula egetelit aenean commodo ligula eget .'}/>
                    <Project style={todolistStyle} title={'Todo List'} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget elit aenean commodo ligula eget elit aenean commodo ligula egetelit aenean commodo ligula eget .'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;