import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import ProjectButton from "./project-button";

const Project = ({ project }) => {
  const getButtons = () => {
    if (project.source === "" && project.demo === "") {
      return <React.Fragment></React.Fragment>;
    } else if (project.source === "") {
      return (
        <Col>
          <ProjectButton href={project.demo} text="Demo" />
        </Col>
      );
    } else if (project.demo === "") {
      return (
        <Col>
          <ProjectButton href={project.source} text="Source" />
        </Col>
      );
    }

    return (
      <React.Fragment>
        <Col className="text-right">
          <ProjectButton href={project.source} text="Source" />
        </Col>
        <Col className="text-left">
          <ProjectButton href={project.demo} text="Demo" />
        </Col>
      </React.Fragment>
    );
  };

  return (
    <Col
      xs={11}
      sm={8}
      md={6}
      lg={4}
      className="project-box ml-4 mr-4 mb-4 pl-0 pr-0"
    >
      <Image fluid src={project.image} alt="project" />
      <h3 className="font-weight-bold mt-4 pl-4 pr-4">{project.title}</h3>
      <Row className="justify-content-center">
        {project.tags.map(tag => {
          return (
            <Col key={tag} xs={0} className="ml-1 mr-1">
              <Badge pill variant="secondary">
                {tag}
              </Badge>
            </Col>
          );
        })}
      </Row>
      <p className="text-left pl-4 pr-4 mt-4">{project.description}</p>
      <Row className="pb-5">{getButtons()}</Row>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.object
};

export default Project;
