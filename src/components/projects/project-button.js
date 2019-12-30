import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ProjectButton = ({ href, text }) => {
  return (
    <Button
      variant="project"
      href={href}
      target="_blank"
      onClick={e => e.target.blur()}
    >
      {text}
    </Button>
  );
};

ProjectButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
};

export default ProjectButton;
