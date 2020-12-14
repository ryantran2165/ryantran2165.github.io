import React from "react";
import PropTypes from "prop-types";

const ExperienceItem = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold">{title}</h4>
      <h5>
        {company} | {location}
      </h5>
      <h5>
        {startDate} – {endDate}
      </h5>
      <p>{description}</p>
    </React.Fragment>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
};

export default ExperienceItem;
