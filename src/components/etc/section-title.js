import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SectionTitle = ({ text }) => {
  return (
    <Row className="mb-4">
      <Col>
        <h1 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
          {text}
        </h1>
        <div className="line" data-aos="fade-in" data-aos-delay="200"></div>
      </Col>
    </Row>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
