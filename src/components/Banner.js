import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const toRotate = ["Web developer", "JavaScript developer", "React developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeliting 
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeliting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeliting && updatedText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if (isDeliting && updatedText === '') {
            setIsDeliting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm a `}<br></br><span className="wrap">{text}</span></h1>
                        <p>My name is Alexandra and I'm an inspiring Frontend developer. This year I got bachelor degree in computer science and ingeneering. Below you can find my web projects</p>
                        <button onClick={() => console.log("Bunner's btn was clicked")}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;