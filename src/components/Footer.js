import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import mailIcon from "../assets/img/mail.svg";
import telegramIcon from "../assets/img/telegram.svg";
import githubIcon from "../assets/img/github-icon.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-content">
                <Row className="align-items-center">
                    <Col sm={12} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="mailto:svchhh@yandex.ru">
                                <img src={mailIcon} alt="E-mail Icon"></img>
                            </a>
                            <a href="https://t.me/svchhh" target="_blank">
                                <img src={telegramIcon} alt="Telegram Icon"></img>
                            </a>
                            <a href="https://github.com/Savchhenko" target="_blank">
                                <img src={githubIcon} alt=""></img>
                            </a>
                        </div>
                        <p>Copy Right, 2022. All Right Reserved<br></br>
                            Russia, Voronezh
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;