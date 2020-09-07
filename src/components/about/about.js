import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ryanImage from "../../assets/ryan_tran.jpg";
import SectionTitle from "../section-title";
import Particles from "react-particles-js";
import ParticlesConfig from "../particles-config.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particlesHeight: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({
        particlesHeight: document.getElementById("about").clientHeight,
      })
    );

    // Initial height set is different from resize because clientHeight is weird in the beginning
    const style = window.getComputedStyle(document.getElementById("about"));
    const padTop = parseInt(
      style.paddingTop.substring(0, style.paddingTop.length - 2)
    );
    const padBot = parseInt(
      style.paddingBottom.substring(0, style.paddingBottom.length - 2)
    );
    const h = document.getElementById("about").clientHeight;
    this.setState({
      particlesHeight: h + padTop + padBot + 40, // Not sure why it's consistently off by 40
    });
  }

  render() {
    return (
      <Container id="about" fluid={true} className="text-center pt-6 pb-5">
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: `${this.state.particlesHeight}px`,
          }}
        >
          <Particles params={ParticlesConfig} className="particles" />
        </div>
        <SectionTitle id="name" text="Ryan L. Tran" />
        <Row className="mb-4 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Image
              className="circle-border"
              src={ryanImage}
              alt="Ryan Tran"
              roundedCircle
              fluid
            />
          </Col>
        </Row>
        <Row className="mb-4 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <h4>Aspiring Machine Learning/Software Engineer</h4>
            <h6>San Jose State University, BS Computer Science C/O 2021</h6>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <p className="text-left">
              Hi, I'm Ryan, and thanks for visiting my site! I'm a senior
              undergrad in computer science at San Jose State University. I
              started programming 5 years ago through my interest in game
              development, but I've since grown to love all forms of software
              development. However, I'm especially interested in artificial
              intelligence and machine learning, which I plan to specialize in
              for my master's.
              <br />
              <br />
              P.S. My hobbies include indie game development, tennis, MMA
              {"\u00A0"}(mainly
              {"\u00A0"}Taekwondo{"\u00A0"}and{"\u00A0"}BJJ), piano, anime, and
              learning Japanese!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-auto pt-4">
            <Button
              href={
                "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
              }
              target="_blank"
              onClick={(e) => e.target.blur()}
            >
              Resume
            </Button>
          </Col>
          <Col className="col-auto pt-4">
            <Button
              href={"https://www.linkedin.com/in/ryantran2165"}
              target="_blank"
              onClick={(e) => e.target.blur()}
            >
              LinkedIn
            </Button>
          </Col>
          <Col className="col-auto pt-4">
            <Button
              href={"https://github.com/ryantran2165"}
              target="_blank"
              onClick={(e) => e.target.blur()}
            >
              GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
