import ProgressBar from "progressbar.js/dist/progressbar";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Waypoint } from "react-waypoint";
import {
  FRAMEWORKS_LIBRARIES,
  MACHINE_LEARNING,
  LANGUAGES as PROGRAMMING_LANGUAGES,
  TOOLS,
} from "../../assets/data/skills-data";
import SectionTitle from "../etc/section-title";
import SkillCircle from "./skill-circle";
import SkillList from "./skill-list";

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
          <Row className="justify-content-center" data-aos="fade-in" data-aos-delay="200">
            <Col xs={6} sm="auto">
              <h5>3 - Proficient</h5>
            </Col>
            <Col xs={6} sm="auto">
              <h5>4 - Advanced</h5>
            </Col>
            <Col xs={6} sm="auto">
              <h5>5 - Expert</h5>
            </Col>
          </Row>
          <Row className="mt-4" data-aos="fade-in" data-aos-delay="200">
            <Col>
              <h4 className="font-weight-bold">Languages</h4>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {Object.entries(PROGRAMMING_LANGUAGES).map((pair) => (
              <SkillCircle id={pair[1].id} key={`${pair[0]}-circle`} />
            ))}
          </Row>
          <Row className="justify-content-evenly mx-2">
            <SkillList subheading="Frameworks/Libraries" skills={FRAMEWORKS_LIBRARIES} />
            <SkillList subheading="Tools" skills={TOOLS} />
            <SkillList subheading="Machine Learning" skills={MACHINE_LEARNING} />
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default Skills;
