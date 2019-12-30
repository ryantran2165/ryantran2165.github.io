import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcon = ({ href, icon, text }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
      <div className="contact-icon-container">
        <a className="contact-icon" href={href}>
          <FontAwesomeIcon icon={icon} />
        </a>
      </div>
      <p>{text}</p>
    </Col>
  );
};

ContactIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string
};

export default ContactIcon;
