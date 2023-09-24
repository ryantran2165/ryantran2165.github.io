import PropTypes from "prop-types";
import React from "react";

const EducationItem = ({ education }) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold">{education.school}</h4>
      <h5>{education.degree}</h5>
      <h5>{education.date}</h5>
      <ul>
        {education.description.map((bullet, i) => (
          <li key={`${i}-${education.degree}-description`}>{bullet}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object,
};

export default EducationItem;
