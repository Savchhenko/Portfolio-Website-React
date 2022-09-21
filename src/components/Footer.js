import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-content">
                <Row className="align-items-center">
                    <Col sm={12} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="icon"/></a>
                            <a href=""><img src={navIcon2} alt="icon"/></a>
                            <a href=""><img src={navIcon3} alt="icon"/></a>
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