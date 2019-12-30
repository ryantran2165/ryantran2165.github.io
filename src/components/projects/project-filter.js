import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ProjectFilter = ({ filter, checked, onChange }) => {
  return (
    <Col xs="auto">
      <Form.Check
        id={`${filter}-checkbox`}
        label={filter}
        name={filter}
        checked={checked}
        onChange={onChange}
      />
    </Col>
  );
};

ProjectFilter.propTypes = {
  filter: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default ProjectFilter;
