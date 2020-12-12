import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FilteredProjects from "./filtered-projects";
import SectionTitle from "../etc/section-title";
import ProjectData from "../../assets/project-data";
import ProjectFilter from "./project-filter";

const LANGUAGES = [
  "Java",
  "Python",
  "C#",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  "NoSQL",
];
const TECHNOLOGIES = [
  "Linux",
  "React",
  "Flask",
  "REST API",
  "MySQL",
  "AWS",
  "Bootstrap",
  "Unity",
];
const MACHINE_LEARNING = [
  "TensorFlow",
  "Keras",
  "scikit-learn",
  "PyTorch",
  "pandas",
  "NumPy",
  "SciPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter Notebook",
  "Scrapy",
];
const CONCEPTS = ["Machine Learning", "Cryptography", "Game"];

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
    const { filters } = this.state;
    const targetName = e.target.name;
    let newFilters = filters;

    // Already has label, remove it, otherwise add it
    if (filters.includes(targetName)) {
      newFilters = filters.filter((label) => label !== targetName);
    } else {
      newFilters.push(targetName);
    }

    this.setState({ filters: newFilters }, this.filterProjects);
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
    const tags = project.languages.concat(
      project.technologies,
      project.machineLearning,
      project.concepts
    );
    return tags.includes(filter);
  };

  render() {
    return (
      <Container id="projects" fluid={true} className="text-center pt-5 pb-5">
        <SectionTitle text="Projects" />
        <Row>
          <Col>
            <Form>
              <Row className="justify-content-center text-left">
                <ProjectFilter
                  currentFilters={this.state.filters}
                  filters={LANGUAGES}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  currentFilters={this.state.filters}
                  filters={TECHNOLOGIES}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  currentFilters={this.state.filters}
                  filters={MACHINE_LEARNING}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  currentFilters={this.state.filters}
                  filters={CONCEPTS}
                  onChange={this.handleFilterChange}
                />
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="switch"
                    id="andOrSwitch"
                    label="AND mode"
                    onChange={this.handleSwitchChange}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <FilteredProjects filteredProjects={this.state.filteredProjects} />
        </Row>
      </Container>
    );
  }
}

export default Projects;
