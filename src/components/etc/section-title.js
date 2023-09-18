import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionTitle = ({ text }) => {
  return (
    <Row className="mb-4" data-aos="fade-down" data-aos-delay="200">
      <Col>
        <h1 className="font-weight-bold">{text}</h1>
        <div className="line"></div>
      </Col>
    </Row>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
