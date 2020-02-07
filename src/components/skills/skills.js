import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Waypoint } from "react-waypoint";
import ProgressBar from "progressbar.js/dist/progressbar";
import SectionTitle from "../section-title";
import SkillCircle from "./skill-circle";
import SkillList from "./skill-list";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { skillsAnimated: false };
  }

  animateSkills = () => {
    if (!this.state.skillsAnimated) {
      createSkill("#java-skill", "Java", 0.8);
      createSkill("#javascript-skill", "JavaScript", 0.6);
      createSkill("#cpp-skill", "C++", 0.6);
      createSkill("#python-skill", "Python", 0.6);
      createSkill("#html-skill", "HTML", 0.6);
      createSkill("#css-skill", "CSS", 0.6);
      createSkill("#php-skill", "PHP", 0.4);
      createSkill("#csharp-skill", "C#", 0.4);
      createSkill("#sql-skill", "SQL", 0.4);
      createSkill("#assembly-skill", "Assembly", 0.4);
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

        step: function(state, circle) {
          circle.path.setAttribute("stroke", state.color);

          var value = Math.round(circle.value() * 5);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "/5<br>" + skill);
          }
        }
      });
      circle.animate(percent);
    }
  };

  render() {
    return (
      <Waypoint onEnter={this.animateSkills}>
        <Container
          id="skills"
          fluid={true}
          className="text-center bg-white pt-5 pb-5"
        >
          <SectionTitle text="Skills" />
          <Row>
            <Col>
              <h3 className="skillsSubheading">Programming Languages:</h3>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-4">
            <SkillCircle id="java-skill" />
            <SkillCircle id="javascript-skill" />
            <SkillCircle id="cpp-skill" />
            <SkillCircle id="python-skill" />
            <SkillCircle id="html-skill" />
            <SkillCircle id="css-skill" />
            <SkillCircle id="php-skill" />
            <SkillCircle id="csharp-skill" />
            <SkillCircle id="sql-skill" />
            <SkillCircle id="assembly-skill" />
          </Row>
          <Row className="justify-content-center">
            <SkillList
              subheading="Programming Technologies"
              skills={[
                "Git (proficient)",
                "React (proficient)",
                "Bootstrap (proficient)",
                "jQuery (proficient)",
                "libGDX (proficient)",
                "Eclipse (proficient)",
                "IntelliJ (proficient)",
                "MySQL (familiar)",
                "Linux (familiar)"
              ]}
            />
            <SkillList
              subheading="Other"
              skills={[
                "Adobe PhotoShop/Illustrator (proficient)",
                "Microsoft Office (proficient)",
                "WordPress (familiar)",
                "Vietnamese (fluent)"
              ]}
            />
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default Skills;
