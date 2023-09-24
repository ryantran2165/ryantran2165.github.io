import { faGithub, faKaggle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Particles from "react-particles-js";
import { ParallaxBanner } from "react-scroll-parallax";
import backgroundImage from "../../assets/images/about_background.jpg";
import ryanImage from "../../assets/images/ryan_tran.jpg";
import ParticlesConfig from "../etc/particles-config.js";
import SocialIcon from "../etc/social-icon";

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
    this.setState({
      particlesHeight: document.getElementById("about").clientHeight,
    });
  }

  render() {
    return (
      <Container id="about" fluid className="text-center p-0">
        <ParallaxBanner
          layers={[
            {
              image: backgroundImage,
              speed: -50,
            },
          ]}
          style={{ minHeight: "100vh" }}
        >
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
          <Row
            className="justify-content-center pt-6 mx-2 mt-3"
            style={{ paddingLeft: "15px", paddingRight: "15px" }}
          >
            <Col
              id="about-content"
              xs={12}
              md={10}
              lg={8}
              xl={6}
              className="px-3 px-md-5 py-5 mb-5"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Image fluid roundedCircle className="circle-img" src={ryanImage} alt="Ryan Tran" />
              <h1 className="font-weight-bold mt-4">Ryan L. Tran</h1>
              <h4 className="font-weight-bold">Software Engineer & Machine Learning Enthusiast</h4>
              <p className="text-left mt-4">
                Hey, thanks for visiting my site! I'm a software developer at EPRI with a master's
                degree in software engineering from San José State University. I've been programming
                for about 8 years, 2.5 of which professionally, and am interested in all types of
                software development (full-stack web, desktop, mobile) and machine learning. Some of
                my hobbies include Kaggle competitions, game development, tennis, ping pong,
                basketball, MMA, movies, and TV shows.
              </p>
              <Row className="justify-content-center">
                <Col xs={3} className="d-flex justify-content-center pt-4">
                  <SocialIcon
                    href={
                      "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
                    }
                    icon={faFilePdf}
                  />
                </Col>
                <Col xs={3} className="d-flex justify-content-center pt-4">
                  <SocialIcon href="https://www.linkedin.com/in/ryantran2165" icon={faLinkedinIn} />
                </Col>
                <Col xs={3} className="d-flex justify-content-center pt-4">
                  <SocialIcon href="https://github.com/ryantran2165" icon={faGithub} />
                </Col>
                <Col xs={3} className="d-flex justify-content-center pt-4">
                  <SocialIcon href="https://www.kaggle.com/ryantran2165" icon={faKaggle} />
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
