import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import imgSocial from "../assets/imgs/projectIMGs/types-of-social-media.png";
import imgTodo from "../assets/imgs/projectIMGs/daily-hourly-schedule-and-do-list-template.jpg";



const Projects = () => {
    const socialStyle = {
        backgroundImage: 'url(' + imgSocial + ')',
    };

    const todolistStyle = {
        backgroundImage: 'url(' + imgTodo + ')',
    }
    return (
        <div className={styles.projectsBlock} id={'Projects'}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={styles.projects}>
                    <Project style={socialStyle}
                             title={'Social Network'}
                             description={'A typescript project with React. Implemented class components as container components, used Redux library as a state container.'}/>
                    <Project style={todolistStyle}
                             title={'Todo List'}
                             description={'A typescript project with React. Implemented modern syntax using React Hooks and Redux as state management. Detailed work with Material UI for better user experience.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;