import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import SocialIcon from "../etc/social-icon";
import { getTags } from "../etc/utils";

const Project = ({ project }) => {
  return (
    <Col xs={12} md={10} lg={6} className="pt-4" data-aos="fade-down" data-aos-delay="200">
      <div className="project-box h-100 pb-5">
        <Image fluid src={project.image} alt={project.title} style={{ objectFit: "cover" }} />
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
          <ul className="text-left mt-4">
            {project.description.map((bullet, i) => (
              <li key={`${i}-${project.title}-description`}>{bullet}</li>
            ))}
          </ul>
        </div>
        <Row className="justify-content-center">
          {project.source !== "" && (
            <Col xs={6} className="d-flex justify-content-center">
              <SocialIcon href={project.source} icon={faGithub} />
            </Col>
          )}
          {project.demo !== "" && (
            <Col xs={6} className="d-flex justify-content-center">
              <SocialIcon href={project.demo} icon={faPlay} />
            </Col>
          )}
        </Row>
      </div>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
