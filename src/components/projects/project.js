import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React from "react";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import IconButton from "../etc/icon-button";
import { getTags } from "../etc/utils";

const Project = ({ project }) => {
  return (
    <Col xs={12} md={10} lg={6} className="mt-30px" data-aos="fade-in" data-aos-delay="200">
      <div className="project-box h-100 pb-5">
        <Image fluid src={project.image} alt={project.title} />
        <div className="px-4">
          <h4 className="font-weight-bold text-center mt-4" data-aos="fade-in" data-aos-delay="200">
            {project.title.replace("&nbsp;", "\u00A0")}
          </h4>
          <h5 className="text-center" data-aos="fade-in" data-aos-delay="200">
            {project.date}
          </h5>
          <div className="text-center">
            {getTags(project).map((tag, i) => {
              return (
                <Badge
                  pill
                  className="p-2 mx-1 mt-2 shadow-sm"
                  key={`${i}-${project.title}-tag`}
                  data-aos="fade-in"
                  data-aos-delay="200"
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
          <ul className="mt-3 mb-0">
            {project.description.map((bullet, i) => (
              <li
                className="mt-2"
                key={`${i}-${project.title}-description`}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <Row className="justify-content-evenly">
            {project.source !== "" && (
              <Col xs="auto" className="mt-3">
                <IconButton
                  href={project.source}
                  icon={faGithub}
                  isNewTab={true}
                  tooltip="Source"
                  data-aos="fade-in"
                  data-aos-delay="200"
                />
              </Col>
            )}
            {project.demo !== "" && (
              <Col xs="auto" className="mt-3">
                <IconButton
                  href={project.demo}
                  icon={faPlay}
                  isNewTab={true}
                  tooltip="Demo"
                  data-aos="fade-in"
                  data-aos-delay="200"
                />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
