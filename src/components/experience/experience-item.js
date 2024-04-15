import PropTypes from "prop-types";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { getTags } from "../etc/utils";

const ExperienceItem = ({ experience }) => {
  return (
    <React.Fragment>
      <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="200">
        {experience.title}
      </h4>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {experience.company} ({experience.location})
      </h5>
      <h5 data-aos="fade-in" data-aos-delay="200">
        {experience.date}
      </h5>
      {getTags(experience).map((tag, i) => {
        return (
          <Badge
            pill
            className="p-2 mr-2 mt-2"
            key={`${i}-${experience.company}-tag`}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {tag}
          </Badge>
        );
      })}
      <ul className="mt-3">
        {experience.description.map((bullet, i) => (
          <li
            key={`${i}-${experience.company}-description`}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {bullet[0]}
            <ul>
              {bullet[1].map((innerBullet, j) => (
                <li key={`${i}-${j}-${experience.company}-description`}>{innerBullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.object,
};

export default ExperienceItem;
