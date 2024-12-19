import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";

const SkillList = ({ subheading, skills }) => {
  return (
    <Col xs={12} md={6} lg={4} className="d-flex flex-column align-items-center text-left mt-4">
      <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {subheading}
      </h4>
      <div>
        {Object.entries(skills).map((pair) => (
          // [0] is key, [1] is value
          <div key={`${pair[0]}-list`} data-aos="fade-in" data-aos-delay="200" className="mb-2">
            {`(${pair[1].rating}) ${pair[0]}`}
          </div>
        ))}
      </div>
    </Col>
  );
};

SkillList.propTypes = {
  subheading: PropTypes.string,
  skills: PropTypes.object,
};

export default SkillList;
