import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import {
  FRAMEWORKS_LIBRARIES,
  MACHINE_LEARNING,
  LANGUAGES as PROGRAMMING_LANGUAGES,
  TOOLS,
} from "../../assets/data/skills-data";
import SectionTitle from "../etc/section-title";
import SkillCircle from "./skill-circle";
import SkillList from "./skill-list";

const Skills = (props) => {
  return (
    <Container fluid className="text-center bg-white py-5">
      <SectionTitle text={props.title} />
      <Row className="justify-content-center" data-aos="fade-in" data-aos-delay="200">
        <Col xs="auto">3 - Proficient</Col>
        <Col xs="auto">4 - Advanced</Col>
        <Col xs="auto">5 - Expert</Col>
      </Row>
      <Row className="mt-4" data-aos="fade-in" data-aos-delay="200">
        <Col>
          <h4 className="font-weight-bold">Languages</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {Object.values(PROGRAMMING_LANGUAGES).map((language) => (
          <SkillCircle language={language} key={`${language.id}-circle`} />
        ))}
      </Row>
      <Row className="justify-content-evenly mx-2">
        <SkillList subheading="Frameworks/Libraries" skills={FRAMEWORKS_LIBRARIES} />
        <SkillList subheading="Tools" skills={TOOLS} />
        <SkillList subheading="Machine Learning" skills={MACHINE_LEARNING} />
      </Row>
    </Container>
  );
};

Skills.propTypes = {
  title: PropTypes.string,
};

export default Skills;
