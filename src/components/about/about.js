import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../etc/social-icon";
import ryanImage from "../../assets/images/ryan_tran.jpg";
import SectionTitle from "../etc/section-title";
import Particles from "react-particles-js";
import ParticlesConfig from "../etc/particles-config.js";

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
      <Container id="about" fluid className="text-center pt-6 pb-5">
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: `${this.state.particlesHeight}px`,
          }}
        >
          <Particles className="particles" params={ParticlesConfig} />
        </div>
        <Row className="justify-content-center mx-2 mt-3">
          <Col
            id="about-content"
            xs={12}
            md={10}
            lg={8}
            xl={6}
            className="px-3 px-md-5 py-5"
          >
            <SectionTitle id="name" text="Ryan L. Tran" />
            <Image
              fluid
              roundedCircle
              className="circle-img"
              src={ryanImage}
              alt="Ryan Tran"
            />
            <h4 className="mt-4">
              Aspiring Software/Machine Learning Engineer
            </h4>
            <h6>San Jose State University, BS Computer Science C/O 2021</h6>
            <p className="text-left mt-4">
              Hi there! I'm Ryan, a senior undergradudate majoring in computer
              science at San Jose State University. I first became interested in
              programming about 6 years ago out of curiosity for game
              development, but I've since become fascinated with AI and machine
              learning. Some of my hobbies include indie game development,
              tennis, ping pong, basketball, MMA, piano, and anime. Thanks for
              visiting my site!
            </p>
            <Row className="justify-content-center">
              <Col xs="auto" className="pt-4">
                <SocialIcon
                  href={
                    "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
                  }
                  icon={faFilePdf}
                />
              </Col>
              <Col xs="auto" className="pt-4">
                <SocialIcon
                  href="https://www.linkedin.com/in/ryantran2165"
                  icon={faLinkedinIn}
                />
              </Col>
              <Col xs="auto" className="pt-4">
                <SocialIcon
                  href="https://github.com/ryantran2165"
                  icon={faGithub}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
