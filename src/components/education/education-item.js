import PropTypes from "prop-types";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { getTags } from "../etc/utils";

const EducationItem = ({ education }) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {education.school}
      </h4>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {education.degree}
      </h5>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {education.date}
      </h5>
      {getTags(education).map((tag, i) => {
        return (
          <Badge
            pill
            className="p-2 mr-2 mt-2"
            key={`${i}-${education.degree}-tag`}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {tag}
          </Badge>
        );
      })}
      <ul className="mt-3">
        {education.description.map((bullet, i) => (
          <li key={`${i}-${education.degree}-description`} data-aos="fade-in" data-aos-delay="200">
            {bullet}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object,
};

export default EducationItem;
