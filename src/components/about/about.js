import { faGithub, faKaggle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Particles from "react-particles-js";
import { ParallaxBanner } from "react-scroll-parallax";
import { MOBILE_MAX_WIDTH, SECTIONS } from "../../App";
import backgroundImage from "../../assets/images/about_background.jpg";
import ryanImage from "../../assets/images/ryan_tran.jpg";
import IconButton from "../etc/icon-button";
import ParticlesConfig from "../etc/particles-config.js";

const PARALLAX_SPEED = -50;

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particlesHeight: 0,
      isMobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateState);
    this.updateState();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateState);
  }

  updateState = () => {
    this.setState({
      particlesHeight: document.getElementById(SECTIONS[0]).clientHeight,
      isMobile: window.innerWidth < MOBILE_MAX_WIDTH,
    });
  };

  render() {
    return (
      <Container fluid className="p-0">
        <ParallaxBanner
          layers={[
            {
              image: backgroundImage,
              speed: PARALLAX_SPEED,
            },
          ]}
          id="about-parallax"
        >
          <div id="about-particles" style={{ height: `${this.state.particlesHeight}px` }}>
            <Particles className="w-100 h-100" params={ParticlesConfig} />
          </div>
          <Row className="justify-content-center px-15px pt-6 mx-2 mt-3">
            <Col
              id="about-content"
              xs={12}
              md={10}
              lg={8}
              xl={6}
              className="text-center px-3 px-md-5 py-5 mb-5"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <Image
                fluid
                roundedCircle
                className="circle-img"
                src={ryanImage}
                alt="Ryan Tran"
                data-aos="fade-in"
                data-aos-delay="400"
              />
              <h1 className="font-weight-bold mt-4" data-aos="fade-in" data-aos-delay="600">
                Ryan L. Tran
              </h1>
              <h4 className="font-weight-bold" data-aos="fade-in" data-aos-delay="800">
                Software Engineer
              </h4>
              <p className="text-left mt-4 mb-0" data-aos="fade-in" data-aos-delay="1000">
                Hi, thanks for visiting! I'm a software engineer at Intel with a master's degree in
                software engineering from San José State University. I've been programming for about
                10 years (4 professionally) and am interested in full-stack web, desktop, mobile,
                and ML app development. My hobbies include Kaggle competitions, game development,
                tennis, and MMA.
              </p>
              <Row className="justify-content-evenly">
                <Col xs="auto" className="mt-4">
                  <IconButton
                    href="https://www.linkedin.com/in/ryantran2165"
                    icon={faLinkedinIn}
                    isNewTab={true}
                    tooltip="LinkedIn"
                    data-aos="fade-in"
                    data-aos-delay={this.state.isMobile ? "200" : "1200"}
                  />
                </Col>
                <Col xs="auto" className="mt-4">
                  <IconButton
                    href="https://github.com/ryantran2165"
                    icon={faGithub}
                    isNewTab={true}
                    tooltip="GitHub"
                    data-aos="fade-in"
                    data-aos-delay={this.state.isMobile ? "400" : "1400"}
                  />
                </Col>
                <Col xs="auto" className="mt-4">
                  <IconButton
                    href="https://www.kaggle.com/ryantran2165"
                    icon={faKaggle}
                    tooltip="Kaggle"
                    isNewTab={true}
                    data-aos="fade-in"
                    data-aos-delay={this.state.isMobile ? "600" : "1600"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </ParallaxBanner>
      </Container>
    );
  }
}

export default About;
