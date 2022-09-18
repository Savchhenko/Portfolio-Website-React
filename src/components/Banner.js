import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm a webdecoder`}<span className="wrap">web developer</span></h1>
                        <p>My name is Alexandra and I'm an inspiring JavaScript developer. This year I got bachelor degree in computer science and ingeneering. Below you can find my web projects</p>
                        <button onClick={() => console.log("Bunner's btn was clicked")}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;