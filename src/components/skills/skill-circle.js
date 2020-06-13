import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

const SkillCircle = ({ id }) => {
  return (
    <Col xs="auto" sm={4} md={3} lg={2} xl={1} className="pb-3 ml-2 mr-2">
      <div id={id} className="skillCircle"></div>
    </Col>
  );
};

SkillCircle.propTypes = {
  id: PropTypes.string,
};

export default SkillCircle;
