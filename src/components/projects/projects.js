import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FilteredProjects from "./filtered-projects";
import SectionTitle from "../section-title";
import ProjectData from "../../assets/project-data";
import ProjectFilter from "./project-filter";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      andMode: false,
      filteredProjects: ProjectData,
    };
  }

  getChecked = (name) => {
    return this.state.filters.includes(name);
  };

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
            if (!project.tags.includes(filter)) {
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
            if (project.tags.includes(filter)) {
              filteredProjects.push(project);
              break;
            }
          }
        }
      }
    }

    this.setState({ filteredProjects });
  };

  render() {
    return (
      <Container id="projects" fluid={true} className="text-center pt-5 pb-5">
        <SectionTitle text="Projects" />
        <Row>
          <Col>
            <Form>
              <Row className="justify-content-center">
                <ProjectFilter
                  filter="CSS"
                  checked={this.getChecked("CSS")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="C++"
                  checked={this.getChecked("C++")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="C#"
                  checked={this.getChecked("C#")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="HTML"
                  checked={this.getChecked("HTML")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Java"
                  checked={this.getChecked("Java")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="JavaScript"
                  checked={this.getChecked("JavaScript")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="NoSQL"
                  checked={this.getChecked("NoSQL")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="PHP"
                  checked={this.getChecked("PHP")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Python"
                  checked={this.getChecked("Python")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="SQL"
                  checked={this.getChecked("SQL")}
                  onChange={this.handleFilterChange}
                />
              </Row>
              <Row className="justify-content-center">
                <ProjectFilter
                  filter="AWS"
                  checked={this.getChecked("AWS")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Flask"
                  checked={this.getChecked("Flask")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Jupyter Notebook"
                  checked={this.getChecked("Jupyter Notebook")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Keras"
                  checked={this.getChecked("Keras")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Linux"
                  checked={this.getChecked("Linux")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="MySQL"
                  checked={this.getChecked("MySQL")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="React"
                  checked={this.getChecked("React")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Scrapy"
                  checked={this.getChecked("Scrapy")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="TensorFlow"
                  checked={this.getChecked("TensorFlow")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Unity"
                  checked={this.getChecked("Unity")}
                  onChange={this.handleFilterChange}
                />
              </Row>
              <Row className="justify-content-center">
                <ProjectFilter
                  filter="Cryptography"
                  checked={this.getChecked("Cryptography")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Game"
                  checked={this.getChecked("Game")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="Machine Learning"
                  checked={this.getChecked("Machine Learning")}
                  onChange={this.handleFilterChange}
                />
                <ProjectFilter
                  filter="REST API"
                  checked={this.getChecked("REST API")}
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
