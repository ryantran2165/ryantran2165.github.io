import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

const SkillCircle = ({ id }) => {
  return (
    <Col xs={6} sm={4} md={3} lg="auto" className="pb-3">
      <div id={id} className="skillCircle"></div>
    </Col>
  );
};

SkillCircle.propTypes = {
  id: PropTypes.string
};

export default SkillCircle;
