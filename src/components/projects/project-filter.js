import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ProjectFilter = ({ currentFilters, filters, onChange }) => {
  return (
    <Col xs={6} sm={4} className="mb-3 col-lg">
      {filters.map((filter) => {
        return (
          <Row key={`${filter}-filter`} data-aos="fade-in" data-aos-delay="200">
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
