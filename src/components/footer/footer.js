import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../etc/social-icon";
import Particles from "react-particles-js";
import ParticlesConfig from "../etc/particles-config";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particlesHeight: 0,
    };
  }

  componentDidMount() {
    this.setState({
      particlesHeight: document.getElementById("footer").clientHeight,
    });
  }

  render() {
    return (
      <Container fluid id="footer" className="text-center pt-3 pb-5">
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: `${this.state.particlesHeight}px`,
          }}
        >
          <Particles className="particles" params={ParticlesConfig} />
        </div>
        <Row className="justify-content-center">
          <Col xs={0} className="footer-col">
            <SocialIcon
              href={
                "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
              }
              icon={faFilePdf}
            />
          </Col>
          <Col xs={0} className="footer-col ml-3 mr-3">
            <SocialIcon
              href="https://www.linkedin.com/in/ryantran2165"
              icon={faLinkedinIn}
            />
          </Col>
          <Col xs={0} className="footer-col">
            <SocialIcon
              href="https://github.com/ryantran2165"
              icon={faGithub}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
