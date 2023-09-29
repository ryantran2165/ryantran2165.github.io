import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { EXPERIENCES } from "../../assets/data/experience-data";
import SectionTitle from "../etc/section-title";
import ExperienceItem from "./experience-item";

const Experience = () => {
  return (
    <Container id="experience" fluid className="text-center py-5">
      <SectionTitle text="Experience" />
      <Row className="justify-content-center text-left mx-2">
        <Col xs={12} md={10} lg={8} xl={6}>
          {EXPERIENCES.map((experience, i) => (
            <div key={`${i}-${experience.company}-experience`}>
              {i > 0 && <br />}
              <ExperienceItem experience={experience} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
