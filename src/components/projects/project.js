import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../etc/social-icon";
import { getTags } from "../etc/utils";

const Project = ({ project }) => {
  let buttons = <React.Fragment></React.Fragment>;

  if (project.source !== "" && project.demo !== "") {
    buttons = (
      <React.Fragment>
        <Col xs="auto">
          <SocialIcon className="project-icon" href={project.source} icon={faGithub} />
        </Col>
        <Col xs="auto">
          <SocialIcon className="project-icon" href={project.demo} icon={faPlay} />
        </Col>
      </React.Fragment>
    );
  } else if (project.source !== "") {
    buttons = (
      <Col xs="auto">
        <SocialIcon className="project-icon" href={project.source} icon={faGithub} />
      </Col>
    );
  } else if (project.demo !== "") {
    buttons = (
      <Col xs="auto">
        <SocialIcon href={project.demo} icon={faPlay} />
      </Col>
    );
  }

  return (
    <Col xs={12} lg={6} className="pt-4" data-aos="fade-down" data-aos-delay="200">
      <div className="project-box h-100 pb-5">
        <Image fluid src={project.image} alt={project.title} />
        <div className="px-4">
          <h4 className="font-weight-bold mt-4">{project.title}</h4>
          <h5>{project.date}</h5>
          {getTags(project).map((tag, i) => {
            return (
              <Badge pill className="p-2 mx-1 mt-2" key={`${i}-${project.title}-tag`}>
                {tag}
              </Badge>
            );
          })}
          <ul className="text-justify mt-4">
            {project.description.map((bullet, i) => (
              <li key={`${i}-${project.title}-description`}>{bullet}</li>
            ))}
          </ul>
        </div>
        <Row className="justify-content-center">{buttons}</Row>
      </div>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
