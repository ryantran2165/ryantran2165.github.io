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
    <Container fluid className="bg-white py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          <SectionTitle text={props.title} />
          <Row className="text-center" data-aos="fade-in" data-aos-delay="200">
            <Col>(3) Proficient</Col>
            <Col>(4) Expert</Col>
            <Col>(5) Wizard</Col>
          </Row>
          <Row className="mt-4" data-aos="fade-in" data-aos-delay="200">
            <Col>
              <h4 className="font-weight-bold text-center mb-0">Languages</h4>
            </Col>
          </Row>
          <Row>
            {Object.values(PROGRAMMING_LANGUAGES).map((language) => (
              <SkillCircle language={language} key={`${language.id}-circle`} />
            ))}
          </Row>
          <Row>
            <SkillList subheading="Frameworks & Libraries" skills={FRAMEWORKS_LIBRARIES} />
            <SkillList subheading="Tools" skills={TOOLS} />
            <SkillList subheading="Machine Learning" skills={MACHINE_LEARNING} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Skills.propTypes = {
  title: PropTypes.string,
};

export default Skills;
