import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";                
import meter2 from "../assets/img/meter2.svg";                
import meter3 from "../assets/img/meter3.svg";   
import colorSharp from "../assets/img/color-sharp.png";             

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I know well HTML, CSS and JavaScript. <br></br>Also I have experience with TypeScript, React, Next.js, Angular, RxJS.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Icon" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Icon" />
                                    <h5>High self-learning ability</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Icon" />
                                    <h5>Work in a team</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Icon" />
                                    <h5>Logical thinking</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Icon" />
                                    <h5>English B2</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img classnName="background-image-left" src={colorSharp} />
        </section>
    );
};

export default Skills;