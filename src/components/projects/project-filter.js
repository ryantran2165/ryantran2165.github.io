import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ProjectFilter = ({ title, currentFilters, filters, onChange }) => {
  return (
    <Col xs={6} md={4} className="col-lg d-flex flex-column align-items-center mb-3">
      <h5 className="font-weight-bold text-center mb-0" data-aos="fade-in" data-aos-delay="200">
        {title}
      </h5>
      <div>
        {filters.map((filter) => {
          return (
            <Row className="mt-2" key={`${filter}-filter`} data-aos="fade-in" data-aos-delay="200">
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
      </div>
    </Col>
  );
};

ProjectFilter.propTypes = {
  title: PropTypes.string,
  currentFilters: PropTypes.array,
  filters: PropTypes.array,
  onChange: PropTypes.func,
};

export default ProjectFilter;
