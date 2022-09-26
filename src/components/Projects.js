import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard.js";
import reactQuizImg from "../assets/img/projectsImages/react-quiz.PNG";
import coffeeShopImg from "../assets/img/projectsImages/coffee-shop.png";
import spaceXImg from "../assets/img/projectsImages/spacex.png";
import jsQuizImg from "../assets/img/projectsImages/simple-js-quiz.PNG";
import raceJsImg from "../assets/img/projectsImages/race-js.PNG";
import weatherAppImg from "../assets/img/projectsImages/weather-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
    const projects = [
        {
            title: "Coffee Shop Website",
            description: "Full Responsive site using HTML, CSS (Flex & Grid), JavaScript, Bootstrap",
            imgUrl: coffeeShopImg,
            codeUrl: "https://github.com/Savchhenko/Coffee-Shop",
            liveDemoUrl: "https://savchhenko.github.io/Coffee-Shop/"
        },
        {
            title: "Weather App - TypeScript SPA",
            description: "TypeScript, TS modules, Fetch request, XHR request, third-party API, building by Webpack",
            imgUrl: weatherAppImg,
            codeUrl: "https://github.com/Savchhenko/Weather-App-TS",
            liveDemoUrl: "https://savchhenko.github.io/Weather-App-TS/"
        },
        {
            title: "SpaceX Landing",
            description: "HTML, CSS, Parallax Effect, Video Animation",
            imgUrl: spaceXImg,
            codeUrl: "https://github.com/Savchhenko/SpaceX",
            liveDemoUrl: "https://savchhenko.github.io/SpaceX/"
        },
        {
            title: "Trivia Quiz",
            description: "- React, Redux, MUI, React-Router, Axios, Custom Hooks",
            imgUrl: reactQuizImg,
            codeUrl: "https://github.com/Savchhenko/Quiz-React",
            liveDemoUrl: "#"
        },
        {
            title: "Simple JS Quiz",
            description: "Practice of dynamic HTML modification by JavaScript",
            imgUrl: jsQuizImg,
            codeUrl: "https://github.com/Savchhenko/Simple-JS-Quiz",
            liveDemoUrl: "https://savchhenko.github.io/Simple-JS-Quiz/"
        },
        {
            title: "Car's Races",
            description: "It's a simple Browser Game by pure JavaScript",
            imgUrl: raceJsImg,
            codeUrl: "https://github.com/Savchhenko/Simple-JS-Quiz",
            liveDemoUrl: "https://savchhenko.github.io/Simple-JS-Quiz/"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>My Projects</h2>
                        <h4>Technologies I've had experience with: </h4> 
                        <p>
                            - HTML, CSS (Flex, Grid, SASS, LESS, PostCSS), JavaScript <br></br>
                            - TypeScript, React, React Hooks, Redux, Next.js <br></br>
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
                                            {...project} //Таким образом передали title, description, imgURL
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
