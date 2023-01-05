import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const toRotate = ["JavaScript разработчик", "Web разработчик", "React разработчик"];
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
                        <span className="tagline">Приветствую на моём сайте-портфолио!</span>
                        <h1>{`Я - `}<br></br><span className="wrap">{text}</span></h1>
                        <p>Меня зовут Александра, и я - Frontend разработчик.<br/>
                            В 2022 году я окончила бакалавриат по направлению "Информатика и вычислительная техника".<br/>
                            После чего начался мой путь в коммерческой разработке продуктов на JavaScript.<br/>
                            Ниже вы можете найти мои учебные веб проекты, созданные в 2020 - 2022 годах.
                        </p>
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
