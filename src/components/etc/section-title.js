import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
