import React from "react";
import PropTypes from "prop-types";
import Project from "./project";

const FilteredProjects = ({ filteredProjects }) => {
  const result = () => {
    if (filteredProjects.length === 0) {
      return <h3>No projects with those filters yet!</h3>;
    }

    return filteredProjects.map(project => {
      return <Project project={project} key={project.title} />;
    });
  };

  return result();
};

FilteredProjects.propTypes = {
  filteredProjects: PropTypes.array
};

export default FilteredProjects;
