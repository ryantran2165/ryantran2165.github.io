import PropTypes from "prop-types";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { getTags } from "../etc/utils";

const EducationItem = ({ education }) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {education.degree}
      </h4>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {education.school} | {education.location}
      </h5>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {education.date}
      </h5>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {education.gpa}/4.0 GPA
      </h5>
      {getTags(education).map((tag, i) => {
        return (
          <Badge
            pill
            className="p-2 mr-2 mt-2 shadow-sm"
            key={`${i}-${education.degree}-tag`}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {tag}
          </Badge>
        );
      })}
    </React.Fragment>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object,
};

export default EducationItem;
