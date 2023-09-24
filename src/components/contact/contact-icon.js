import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContactIcon = ({ href, icon }) => {
  return (
    <Row className="justify-content-center pt-2">
      <Col xs="auto">
        <a className="contact-icon-container" href={href}>
          <FontAwesomeIcon className="contact-icon" icon={icon} />
        </a>
      </Col>
    </Row>
  );
};

ContactIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
};

export default ContactIcon;
