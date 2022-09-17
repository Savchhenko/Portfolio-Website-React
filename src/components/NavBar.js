import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

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

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                    href="#home" 
                    className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                >Home</Nav.Link>
                <Nav.Link 
                    href="#skills" 
                    className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                >Skills</Nav.Link>
                <Nav.Link 
                    href="#projects" 
                    className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="#">
                    <img src={""} alt=""></img>
                </a>
                <a href="#">
                    <img src={""} alt=""></img>
                </a>
                <a href="#">
                    <img src={""} alt=""></img>
                </a>
                </div>
                <button
                className="vvd"
                onClick={() => {
                    console.log("Contact me");
                }}
                >
                <span>Let's connect</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;