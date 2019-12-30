import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from "./line";

const SectionTitle = ({ text }) => {
  return (
    <Row className="mb-4">
      <Col data-aos="flip-down">
        <h1 className="font-weight-bold">{text}</h1>
        <Line />
      </Col>
    </Row>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string
};

export default SectionTitle;
