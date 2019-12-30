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
      filteredProjects: ProjectData
    };
  }

  getChecked = name => {
    return this.state.filters.includes(name);
  };

  handleFilterChange = e => {
    const { filters } = this.state;
    const targetName = e.target.name;
    let newFilters = filters;

    // Already has label, remove it, otherwise add it
    if (filters.includes(targetName)) {
      newFilters = filters.filter(label => label !== targetName);
    } else {
      newFilters.push(targetName);
    }

    this.setState({ filters: newFilters }, this.filterProjects);
  };

  handleSwitchChange = () => {
    this.setState(
      prevState => ({
        andMode: !prevState.andMode
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
      <section id="projects">
        <Container fluid={true} className="text-center pt-5 pb-5">
          <SectionTitle text="Projects" />
          <Row>
            <Col data-aos="flip-down">
              <Form>
                <Row className="justify-content-center">
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
                    filter="C++"
                    checked={this.getChecked("C++")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="Python"
                    checked={this.getChecked("Python")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="HTML"
                    checked={this.getChecked("HTML")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="CSS"
                    checked={this.getChecked("CSS")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="PHP"
                    checked={this.getChecked("PHP")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="C#"
                    checked={this.getChecked("C#")}
                    onChange={this.handleFilterChange}
                  />
                  <ProjectFilter
                    filter="SQL"
                    checked={this.getChecked("SQL")}
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
      </section>
    );
  }
}

export default Projects;
