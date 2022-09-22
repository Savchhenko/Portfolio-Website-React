import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import mailIcon from "../assets/img/mail.svg";
import telegramIcon from "../assets/img/telegram.svg";
import githubIcon from "../assets/img/github-icon.svg";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                    href="#home" 
                    className={activeLink === "home" ? "active navbar-link" : "navbar-link"} 
                    onClick={() => onUpdateActiveLink("home")}  
                >Home</Nav.Link>
                <Nav.Link 
                    href="#skills" 
                    className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} 
                    onClick={() => onUpdateActiveLink("skills")}
                >Skills</Nav.Link>
                <Nav.Link 
                    href="#projects" 
                    className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} 
                    onClick={() => onUpdateActiveLink("projects")}
                >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <span className="vvd">Let's connect <ArrowRightCircle size={25}/></span>               
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
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;
