import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import imgSocial from "../assets/imgs/projectIMGs/types-of-social-media.png";
import imgTodo from "../assets/imgs/projectIMGs/daily-hourly-schedule-and-do-list-template.jpg";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    const socialStyle = {
        backgroundImage: 'url(' + imgSocial + ')',
    };

    const todolistStyle = {
        backgroundImage: 'url(' + imgTodo + ')',
    }
    return (
        <Fade triggerOnce>
            <div className={styles.projectsBlock} id={'Projects'}>
                <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                    <Title title={'My Projects'}/>
                    <div className={styles.projects}>
                        <Project style={socialStyle}
                                 title={'Weather App'}
                                 description={'It\'s a simple, yet powerful app that gives you all the weather information you need, in a beautiful and easy-to-use interface.'}/>
                        <Project style={todolistStyle}
                                 title={'Todolist'}
                                 description={'A typescript project with React. Implemented modern syntax using React Hooks and Redux as state management. Detailed work with Material UI for better user experience.'}/>
                        <Project style={todolistStyle}
                                 title={'Guess the Country'}
                                 description={'A full javascript project. The project includes user database via firebase, and works with maps and map data via amCharts, implementing MVC atchitecture.'}/>
                        <Project style={todolistStyle}
                                 title={'Inctagram'}
                                 description={'Web application similar to Instagram, a huge team project.'}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Projects;
