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
      createSkill("#python-skill", "Python", 0.6);
      createSkill("#csharp-skill", "C#", 0.6);
      createSkill("#cpp-skill", "C++", 0.6);
      createSkill("#javascript-skill", "JavaScript", 0.6);
      createSkill("#html-skill", "HTML", 0.6);
      createSkill("#css-skill", "CSS", 0.6);
      createSkill("#php-skill", "PHP", 0.6);
      createSkill("#sql-nosql-skill", "SQL/NoSQL", 0.6);
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
        <Container
          id="skills"
          fluid={true}
          className="text-center bg-white pt-5 pb-5"
        >
          <SectionTitle text="Skills" />
          <Row className="justify-content-center mt-3 mb-4">
            <Col xs="auto">
              <h5>5 - Expert</h5>
            </Col>
            <Col xs="auto">
              <h5>4 - Advanced</h5>
            </Col>
            <Col xs="auto">
              <h5>3 - Proficient</h5>
            </Col>
            <Col xs="auto">
              <h5>2 - Familiar</h5>
            </Col>
            <Col xs="auto">
              <h5>1 - Unfamiliar</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="font-weight-bold">Programming Languages</h4>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-4">
            <SkillCircle id="java-skill" />
            <SkillCircle id="python-skill" />
            <SkillCircle id="csharp-skill" />
            <SkillCircle id="cpp-skill" />
            <SkillCircle id="javascript-skill" />
            <SkillCircle id="html-skill" />
            <SkillCircle id="css-skill" />
            <SkillCircle id="php-skill" />
            <SkillCircle id="sql-nosql-skill" />
            <SkillCircle id="assembly-skill" />
          </Row>
          <Row className="justify-content-center">
            <SkillList
              subheading="Programming Technologies"
              skills={[
                "Git (3)",
                "Linux (3)",
                "React (3)",
                "Flask (3)",
                "REST API (3)",
                "MySQL (3)",
                "AWS (3)",
                "JSON (3)",
                "Bootstrap (3)",
                "jQuery (2)",
                "Unity (3)",
                "IntelliJ (3)",
                "Eclipse (3)",
                "Visual Studio (3)",
              ]}
            />
            <SkillList
              subheading="Machine Learning"
              skills={[
                "TensorFlow (3)",
                "Keras (3)",
                "scikit-learn (3)",
                "PyTorch (2)",
                "pandas (3)",
                "NumPy (3)",
                "SciPy (2)",
                "Matplotlib (3)",
                "Seaborn (3)",
                "Jupyter Notebook (3)",
                "MATLAB (2)",
                "Scrapy (3)",
              ]}
            />
            <SkillList
              subheading="Other"
              skills={[
                "Vietnamese (4)",
                "Adobe Illustrator (3)",
                "Adobe Photoshop (3)",
                "Microsoft Office (3)",
                "WordPress (2)",
              ]}
            />
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default Skills;
