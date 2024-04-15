import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ProjectData from "../../assets/data/projects-data";
import {
  FRAMEWORKS_LIBRARIES,
  LANGUAGES,
  MACHINE_LEARNING,
  TOOLS,
} from "../../assets/data/skills-data";
import SectionTitle from "../etc/section-title";
import { getTags } from "../etc/utils";
import Project from "./project";
import ProjectFilter from "./project-filter";

const CATEGORIES = ["Full-Stack", "Desktop", "Mobile", "Machine Learning", "Game", "Competition"];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      andMode: false,
      filteredProjects: ProjectData,
    };
  }

  handleFilterChange = (e) => {
    let { filters } = this.state;
    const targetName = e.target.name;

    // Already has label, remove it, otherwise add it
    if (filters.includes(targetName)) {
      filters = filters.filter((label) => label !== targetName);
    } else {
      filters.push(targetName);
    }

    this.setState({ filters }, this.filterProjects);
  };

  handleSwitchChange = () => {
    this.setState(
      (prevState) => ({
        andMode: !prevState.andMode,
      }),
      this.filterProjects
    );
  };

  filterProjects = () => {
    const { filters, andMode } = this.state;
    let filteredProjects = [];

    if (filters.length === 0) {
      filteredProjects = ProjectData;
    } else {
      for (const project of ProjectData) {
        if (andMode) {
          let success = true;

          // And mode: need all filters matched
          for (const filter of filters) {
            if (!this.projectHasTag(project, filter)) {
              success = false;
              break;
            }
          }

          if (success) {
            filteredProjects.push(project);
          }
        } else {
          // Or mode: only need one tag/filter to match
          for (const filter of filters) {
            if (this.projectHasTag(project, filter)) {
              filteredProjects.push(project);
              break;
            }
          }
        }
      }
    }

    this.setState({ filteredProjects });
  };

  projectHasTag = (project, filter) => {
    return getTags(project).includes(filter);
  };

  render() {
    let projects = (
      <h3 className="mt-30px" data-aos="fade-in" data-aos-delay="200">
        No projects with those filters yet!
      </h3>
    );

    if (this.state.filteredProjects.length > 0) {
      projects = this.state.filteredProjects.map((project) => {
        return <Project project={project} key={`${project.title}-project`} />;
      });
    }

    return (
      <Container id="projects" fluid className="text-center py-5">
        <SectionTitle text="Projects" />
        <Row className="justify-content-center mx-2">
          <Col xs={12} md={10} xl={8}>
            <Row className="text-left">
              <ProjectFilter
                currentFilters={this.state.filters}
                filters={CATEGORIES}
                onChange={this.handleFilterChange}
              />
              <ProjectFilter
                currentFilters={this.state.filters}
                filters={Object.keys(LANGUAGES)}
                onChange={this.handleFilterChange}
              />
              <ProjectFilter
                currentFilters={this.state.filters}
                filters={Object.keys(FRAMEWORKS_LIBRARIES)}
                onChange={this.handleFilterChange}
              />
              <ProjectFilter
                currentFilters={this.state.filters}
                filters={Object.keys(TOOLS)}
                onChange={this.handleFilterChange}
              />
              <ProjectFilter
                currentFilters={this.state.filters}
                filters={Object.keys(MACHINE_LEARNING)}
                onChange={this.handleFilterChange}
              />
            </Row>
            <div data-aos="fade-in" data-aos-delay="200">
              <Form.Check
                type="switch"
                id="andOrSwitch"
                label="AND mode"
                onChange={this.handleSwitchChange}
              />
            </div>
            <Row className="justify-content-center">{projects}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
