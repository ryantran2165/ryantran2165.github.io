import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  const skillElements = skills.map((skillArr, i) => (
    <Col
      xs={5}
      sm={skills.length === 1 ? 5 : 4}
      md={skills.length === 1 ? 6 : 5}
      lg={skills.length === 1 ? 6 : 4}
      xl={skills.length === 1 ? 5 : 4}
      key={i + skillArr[0]}
    >
      {skillArr.map((skill) => {
        return <h6 key={skill}>{skill}</h6>;
      })}
    </Col>
  ));

  return (
    <Col xs={12} md={6} xl={4} className="pb-4">
      <Row>
        <Col>
          <h4 className="font-weight-bold">{subheading}</h4>
        </Col>
      </Row>
      <Row className="justify-content-center text-left">{skillElements}</Row>
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.array,
};

export default SkillList;
