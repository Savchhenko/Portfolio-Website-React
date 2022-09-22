import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/github-icon.svg";

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <div className="card-buttons">
                <a className="btn btn-primary" href="#" target="_blank">Code <img src={githubIcon} alt="GitHub Icon" /></a>
                <a className="btn btn-primary" href="#" target="_blank">Live Demo</a>
            </div>
        </Col>
    );
};

export default ProjectCard;