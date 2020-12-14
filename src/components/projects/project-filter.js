import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ProjectFilter = ({ currentFilters, filters, onChange }) => {
  return (
    <Col xs={6} sm={4} className="mb-3 col-lg">
      {filters
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((filter) => {
          return (
            <Row key={`${filter}-filter`}>
              <Col>
                <Form.Check
                  custom
                  id={`${filter}-checkbox`}
                  label={filter}
                  name={filter}
                  checked={currentFilters.includes(filter)}
                  onChange={onChange}
                />
              </Col>
            </Row>
          );
        })}
    </Col>
  );
};

ProjectFilter.propTypes = {
  currentFilters: PropTypes.array,
  filters: PropTypes.array,
  onChange: PropTypes.func,
};

export default ProjectFilter;
