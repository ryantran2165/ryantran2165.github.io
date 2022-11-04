import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  return (
    <Col xs={12} sm={6} md={4} xl={3} className="pt-3">
      <h4 className="font-weight-bold">{subheading}</h4>
      <Row className="justify-content-center text-left">
        <Col xs="auto">
          {Object.entries(skills).map((pair) => (
            // [0] is key, [1] is value
            <h6 key={`${pair[0]}-list`}>{`(${pair[1].rating}) ${pair[0]}`}</h6>
          ))}
        </Col>
      </Row>
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.object,
};

export default SkillList;
