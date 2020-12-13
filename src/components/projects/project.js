import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../etc/social-icon";

const Project = ({ project }) => {
  project.languages.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  project.technologies.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  project.machineLearning.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  project.categories.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
  const tags = project.languages.concat(
    project.technologies,
    project.machineLearning,
    project.categories
  );

  let buttons = <React.Fragment></React.Fragment>;

  if (project.source !== "" && project.demo !== "") {
    buttons = (
      <React.Fragment>
        <Col xs="auto">
          <SocialIcon
            className="project-icon"
            href={project.source}
            icon={faGithub}
          />
        </Col>
        <Col xs="auto">
          <SocialIcon
            className="project-icon"
            href={project.demo}
            icon={faPlay}
          />
        </Col>
      </React.Fragment>
    );
  } else if (project.source !== "") {
    buttons = (
      <Col xs="auto">
        <SocialIcon
          className="project-icon"
          href={project.source}
          icon={faGithub}
        />
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
    <Col xs={12} lg={6} className="pt-4">
      <div className="project-box h-100 pb-5">
        <Image fluid src={project.image} alt={project.title} />
        <h3 className="font-weight-bold px-4 mt-4">{project.title}</h3>
        <Row className="justify-content-center mx-2">
          {tags.map((tag) => {
            return (
              <Col key={tag} xs={0} className="pt-2 mx-1">
                <Badge pill className="p-2">
                  {tag}
                </Badge>
              </Col>
            );
          })}
        </Row>
        <p className="text-left px-4 mt-4">{project.description}</p>
        <Row className="justify-content-center">{buttons}</Row>
      </div>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
