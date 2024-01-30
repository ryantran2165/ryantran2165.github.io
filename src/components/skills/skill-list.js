import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  return (
    <Col xs={12} md="auto" className="text-left mt-4">
      <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {subheading}
      </h4>
      {Object.entries(skills).map((pair) => (
        // [0] is key, [1] is value
        <h6
          key={`${pair[0]}-list`}
          data-aos="fade-in"
          data-aos-delay="200"
        >{`(${pair[1].rating}) ${pair[0]}`}</h6>
      ))}
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.object,
};

export default SkillList;
