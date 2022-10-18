import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard.js";
import reactQuizImg from "../assets/img/projectsImages/react-quiz.PNG";
import coffeeShopImg from "../assets/img/projectsImages/coffee-shop.png";
import spaceXImg from "../assets/img/projectsImages/spacex.png";
import jsQuizImg from "../assets/img/projectsImages/simple-js-quiz.PNG";
import raceJsImg from "../assets/img/projectsImages/race-js.PNG";
import pikaduImg from "../assets/img/projectsImages/pikadu.PNG";
import cliningImg from "../assets/img/projectsImages/clining-service.PNG";
import distanceImg from "../assets/img/projectsImages/distance.PNG";
import weatherAppImg from "../assets/img/projectsImages/weather-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
    const projects = [
        {
            title: "Вебсайт кофейного магазина",
            description: "Полностью адаптивный сайт, написанный на HTML, CSS (Flex & Grid), JavaScript, Bootstrap",
            imgUrl: coffeeShopImg,
            codeUrl: "https://github.com/Savchhenko/Coffee-Shop",
            liveDemoUrl: "https://savchhenko.github.io/Coffee-Shop/"
        },
        {
            title: "Приложение погоды - TypeScript SPA",
            description: "TypeScript, TS modules, Fetch request, XHR request, сторонее API, сборка с использованием Webpack",
            imgUrl: weatherAppImg,
            codeUrl: "https://github.com/Savchhenko/Weather-App-TS",
            liveDemoUrl: "https://savchhenko.github.io/Weather-App-TS/"
        },
        {
            title: "Лендинг SpaceX",
            description: "HTML, CSS, Эффект параллакса, Видео анимация",
            imgUrl: spaceXImg,
            codeUrl: "https://github.com/Savchhenko/SpaceX",
            liveDemoUrl: "https://savchhenko.github.io/SpaceX/"
        },
        {
            title: "Trivia Квиз",
            description: "- React, Redux, MUI, React-Router, Axios, Custom Hooks",
            imgUrl: reactQuizImg,
            codeUrl: "https://github.com/Savchhenko/Quiz-React",
            liveDemoUrl: "#"
        },
        {
            title: "Небольшой квиз на JS",
            description: "Практика динамического изменения HTML через JavaScript",
            imgUrl: jsQuizImg,
            codeUrl: "https://github.com/Savchhenko/Simple-JS-Quiz",
            liveDemoUrl: "https://savchhenko.github.io/Simple-JS-Quiz/"
        },
        {
            title: "Гонки",
            description: "Простая браузерная игра на нативном JavaScript",
            imgUrl: raceJsImg,
            codeUrl: "https://github.com/Savchhenko/Simple-JS-Quiz",
            liveDemoUrl: "https://savchhenko.github.io/Simple-JS-Quiz/"
        },
        {
            title: "Портал Pikadu",
            description: "Частичная копия портала Pikabu на JS с простой авторизацией через Firebase и возможностью добавлять посты",
            imgUrl: pikaduImg,
            codeUrl: "https://github.com/Savchhenko/Web-portal",
            liveDemoUrl: "https://savchhenko.github.io/Web-portal/"
        },
        {
            title: "Сайт клининговой компании",
            description: "Многостраничная форма с вопросами на нативном JavaScipt",
            imgUrl: cliningImg,
            codeUrl: "https://github.com/Savchhenko/AdvertisingQuiz",
            liveDemoUrl: "https://savchhenko.github.io/AdvertisingQuiz/"
        },
        {
            title: "Лэндинг социальной сети",
            description: "Адаптивный лэндинг  с большим количеством блоков и элементов",
            imgUrl: distanceImg,
            codeUrl: "https://github.com/Savchhenko/Distance",
            liveDemoUrl: "https://savchhenko.github.io/Distance/"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Мои проекты</h2>
                        <h4>Технологии, с которыми я работала: </h4> 
                        <p>
                            - HTML, CSS (Flex, Grid, SASS, LESS, PostCSS), JavaScript <br></br>
                            - TypeScript, React, React Hooks, Context API, Redux, Next.js <br></br>
                            - Angular, RxJS <br></br>
                            - Webpack, Gulp <br></br>
                            - Rest API, Fetch, XHR, Axios, Ajax <br></br>
                            - Matirial UI, Ant Design, Bootstrap, Tailwind, Figma
                        </p>
                        {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" 
                                className="nav-pills mb-5 justify-content-center align-items-center" 
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} //Таким образом передали title, description, imgURL
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container> */}

                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} //Таким образом передаём title, description, imgURL
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
};

export default Projects;
