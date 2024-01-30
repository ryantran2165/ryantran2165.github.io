import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";

const SkillCircle = ({ id }) => {
  return (
    <Col xs="auto" className="mt-3 mx-2" data-aos="fade-in" data-aos-delay="200">
      <div id={id} className="skillCircle"></div>
    </Col>
  );
};

SkillCircle.propTypes = {
  id: PropTypes.string,
};

export default SkillCircle;
