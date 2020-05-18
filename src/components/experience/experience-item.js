import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExperienceItem = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <Row className="justify-content-center">
      <Col className="text-left" xs={12} sm={10} md={8} lg={6} xl={4}>
        <h4 className="font-weight-bold">{title}</h4>
        <h5>
          {company} | {location}
        </h5>
        <h5>
          {startDate} – {endDate}
        </h5>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
};

export default ExperienceItem;
