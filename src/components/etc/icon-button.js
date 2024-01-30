import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { Tooltip } from "react-tooltip";

const IconButton = ({
  href,
  icon,
  isNewTab,
  tooltip,
  "data-aos": dataAos,
  "data-aos-delay": dataAosDelay,
}) => {
  const target = isNewTab ? "_blank" : null;
  return (
    <span data-aos={dataAos} data-aos-delay={dataAosDelay}>
      <a
        className="icon-button"
        href={href}
        target={target}
        rel="noopener noreferrer"
        data-tooltip-id="button-tooltip"
        data-tooltip-content={tooltip}
      >
        <FontAwesomeIcon className="icon-button-fa" icon={icon} />
      </a>
      <Tooltip id="button-tooltip" />
    </span>
  );
};

IconButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
};

export default IconButton;
