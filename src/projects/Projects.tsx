import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import imgWeather from "../assets/imgs/projectIMGs/weather.png";
import imgInctagram from "../assets/imgs/projectIMGs/inctagram.png";
import imgGuess from "../assets/imgs/projectIMGs/guess.png";
import imgCards from "../assets/imgs/projectIMGs/cards.png";
import imgTodo from "../assets/imgs/projectIMGs/daily-hourly-schedule-and-do-list-template.jpg";
import { Fade } from "react-awesome-reveal";

const Projects = () => {

    const addBackgroundImage = (img: string) => {
        return {
            backgroundImage: 'url(' + img + ')'
        }
    }

    return (
        <Fade triggerOnce>
            <div className={styles.projectsBlock} id={'Projects'}>
                <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                    <Title title={'My Projects'}/>
                    <div className={styles.projects}>
                        <Project style={addBackgroundImage(imgWeather)}
                                 title={'Weather App'}
                                 description={'It\'s a simple, yet powerful app that gives you all the weather information you need, in a beautiful and easy-to-use interface.'}
                                 link={'https://weather-app-maggloo.vercel.app/'}
                                 hashtags={['nextjs', 'typescript', 'google-maps-api', 'tailwind']}
                        />
                        <Project style={addBackgroundImage(imgTodo)}
                                 title={'Todolist'}
                                 description={'A typescript project with React. Implemented modern syntax using React Hooks and Redux as state management. Detailed work with Material UI for better user experience.'}
                                 link={'https://maggloo.github.io/todolist'}
                                 hashtags={['react', 'typescript', 'redux', 'mui']}
                        />
                        <Project style={addBackgroundImage(imgGuess)}
                                 title={'Guess the Country'}
                                 description={'A full javascript project. The project includes user database via firebase, and works with maps and map data via amCharts, implementing MVC atchitecture.'}
                                 link={'https://maggloo.github.io/GuessTheCountry/#login'}
                                 hashtags={['javascript', 'css', 'firebase', 'amcharts']}
                        />
                        <Project style={addBackgroundImage(imgInctagram)}
                                 title={'Inctagram'}
                                 description={'Web application similar to Instagram, a huge team project.'}
                                 link={'https://inctagram-v2.vercel.app/auth/registration'}
                                 hashtags={['nextjs', 'zustand', 'reactQuery', 'scss']}
                        />
                        <Project style={addBackgroundImage(imgCards)}
                                 title={'Memorize'}
                                 description={'Memorize is an application for memorizing information using cards. Team project.'}
                                 link={'https://pavel-grigoryev.github.io/cards-app/'}
                                 hashtags={['react', 'typescript', 'redux', 'mui']}
                        />
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Projects;
