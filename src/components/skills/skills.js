import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Waypoint } from "react-waypoint";
import ProgressBar from "progressbar.js/dist/progressbar";
import SectionTitle from "../etc/section-title";
import SkillCircle from "./skill-circle";
import SkillList from "./skill-list";
import {
  LANGUAGES as PROGRAMMING_LANGUAGES,
  FRAMEWORKS_LIBRARIES,
  TECHNOLOGIES_PARADIGMS,
  MACHINE_LEARNING,
} from "../../assets/data/skills-data";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillsAnimated: false };
  }

  animateSkills = () => {
    if (!this.state.skillsAnimated) {
      for (const language in PROGRAMMING_LANGUAGES) {
        const lang = PROGRAMMING_LANGUAGES[language];
        createSkill(`#${lang.id}`, lang.display, lang.rating / 5);
      }
      this.setState({ skillsAnimated: true });
    }

    function createSkill(container, skill, percent) {
      var circle = new ProgressBar.Circle(container, {
        color: "#222",
        strokeWidth: 5,
        trailColor: "#eee",
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1500,
        from: { color: "#7fffd4" },
        to: { color: "#7fffd4" },

        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);

          var value = Math.round(circle.value() * 5);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "/5<br>" + skill);
          }
        },
      });
      circle.animate(percent);
    }
  };

  render() {
    return (
      <Waypoint onEnter={this.animateSkills}>
        <Container id="skills" fluid className="text-center bg-white py-5">
          <SectionTitle text="Skills" />
          <Row className="justify-content-center mt-3 mb-4">
            <Col xs={6} sm="auto">
              <h5>5 - Expert</h5>
            </Col>
            <Col xs={6} sm="auto">
              <h5>4 - Advanced</h5>
            </Col>
            <Col xs={6} sm="auto">
              <h5>3 - Proficient</h5>
            </Col>
            <Col xs={6} sm="auto">
              <h5>2 - Familiar</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="font-weight-bold">Programming Languages</h4>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            {Object.entries(PROGRAMMING_LANGUAGES).map((pair) => (
              <SkillCircle id={pair[1].id} key={`${pair[0]}-circle`} />
            ))}
          </Row>
          <Row className="justify-content-center">
            <SkillList subheading="Frameworks/Libraries" skills={FRAMEWORKS_LIBRARIES} />
            <SkillList subheading="Technologies/Paradigms" skills={TECHNOLOGIES_PARADIGMS} />
            <SkillList subheading="Machine Learning" skills={MACHINE_LEARNING} />
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default Skills;
