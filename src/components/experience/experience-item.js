import React from "react";
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import { getTags } from "../etc/utils";

const ExperienceItem = ({ experience }) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold">{experience.title}</h4>
      <h5>
        {experience.company} | {experience.location}
      </h5>
      <h5>{experience.date}</h5>
      {getTags(experience).map((tag, i) => {
        return (
          <Badge
            pill
            className="p-2 mx-1 mt-2"
            key={`${i}-${experience.company}-tag`}
          >
            {tag}
          </Badge>
        );
      })}
      <ul className="mt-2">
        {experience.description.map((bullet, i) => (
          <li key={`${i}-${experience.company}-description`}>{bullet}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.object,
};

export default ExperienceItem;
