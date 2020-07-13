import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  return (
    <Col xs={12} sm={6} md={4} xl={3} className="pb-4">
      <Row>
        <Col>
          <h4 className="font-weight-bold">{subheading}</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          {skills
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .map((skill) => {
              return <h6 key={skill}>{skill}</h6>;
            })}
        </Col>
      </Row>
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.array,
};

export default SkillList;
