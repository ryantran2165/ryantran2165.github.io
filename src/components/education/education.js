import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { EDUCATION } from "../../assets/data/education-data";
import SectionTitle from "../etc/section-title";
import EducationItem from "./education-item";

const Education = () => {
  return (
    <Container id="education" fluid className="text-center bg-white py-5">
      <SectionTitle text="Education" />
      <Row className="justify-content-center text-left mx-2">
        <Col xs={12} md={10} lg={8} xl={6}>
          {EDUCATION.map((education, i) => (
            <div key={`${i}-${education.degree}-education`}>
              {i > 0 && <hr className="my-4" data-aos="fade-in" data-aos-delay="200" />}
              <EducationItem education={education} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
