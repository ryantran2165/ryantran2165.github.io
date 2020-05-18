import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  return (
    <Col xs={12} sm={6} md={5} xl={4} className="pb-4">
      <h4 className="font-weight-bold">{subheading}</h4>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.array,
};

export default SkillList;
