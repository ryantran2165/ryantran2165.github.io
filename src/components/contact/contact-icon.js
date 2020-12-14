import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcon = ({ href, icon }) => {
  return (
    <Row className="justify-content-center pt-2">
      <Col xs="auto">
        <a href={href}>
          <div className="contact-icon-container">
            <FontAwesomeIcon className="contact-icon" icon={icon} />
          </div>
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
