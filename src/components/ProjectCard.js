import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/github-icon.svg";

const ProjectCard = ({ title, description, imgUrl, codeUrl, liveDemoUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} height="186px"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div className="card-buttons">
                <a className="btn btn-primary" href={codeUrl} target="_blank">Code <img src={githubIcon} alt="GitHub Icon" /></a>
                <a className="btn btn-primary" href={liveDemoUrl} target="_blank">Live Demo</a>
            </div>
        </Col>
    );
};

export default ProjectCard;