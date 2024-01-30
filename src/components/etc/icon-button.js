import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const IconButton = ({
  href,
  icon,
  isNewTab,
  "data-aos": dataAos,
  "data-aos-delay": dataAosDelay,
}) => {
  const target = isNewTab ? "_blank" : null;
  return (
    <span data-aos={dataAos} data-aos-delay={dataAosDelay}>
      <a className="icon-button" href={href} target={target} rel="noopener noreferrer">
        <FontAwesomeIcon className="icon-button-fa" icon={icon} />
      </a>
    </span>
  );
};

IconButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
};

export default IconButton;
