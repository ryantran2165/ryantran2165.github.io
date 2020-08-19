import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ryanImage from "../../assets/ryan_tran.jpg";
import SectionTitle from "../section-title";
import Particles from "react-particles-js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particlesHeightStyle: {},
    };
  }

  componentDidMount() {
    // Set height of particles dynamically because it works
    this.setState({
      particlesHeightStyle: {
        height: `${Math.trunc(
          1.25 * document.getElementById("about").clientHeight
        )}px`,
      },
    });
  }

  render() {
    return (
      <Container id="about" fluid={true} className="text-center pt-6 pb-5">
        <Row>
          <Col
            className="particles-wrapper-about"
            style={this.state.particlesHeightStyle}
          >
            <Particles className="particles" params={particlesConfig} />
          </Col>
        </Row>
        <SectionTitle text="Ryan L. Tran" />
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
        <Row>
          <Col>
            <Button
              href={
                "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
              }
              target="_blank"
              onClick={(e) => e.target.blur()}
            >
              View Resume
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const particlesConfig = {
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        elementId: "",
        enable: false,
        mode: [],
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  particles: {
    collisions: {
      enable: false,
      mode: "bounce",
    },
    color: {
      value: "#7fffd4",
      animation: {
        enable: false,
        speed: 1,
        sync: true,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#7fffd4",
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "lime",
        },
        enable: false,
      },
      triangles: {
        enable: false,
      },
      width: 1,
      warp: false,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "none",
      enable: true,
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        factor: {
          horizontal: {
            value: 50,
            offset: 0,
          },
          vertical: {
            value: 10,
            offset: 40000,
          },
        },
      },
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#7fffd4",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 100,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.1,
        speed: 3,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 0.5,
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      random: false,
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#7fffd4",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        character: {
          fill: true,
          close: true,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        char: {
          fill: true,
          close: true,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        image: {
          fill: true,
          close: true,
          height: 100,
          replaceColor: false,
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
        },
        images: {
          fill: true,
          close: true,
          height: 100,
          replaceColor: false,
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
        },
        polygon: {
          fill: true,
          close: true,
          sides: 5,
        },
        star: {
          fill: true,
          close: true,
          sides: 5,
        },
      },
      type: "circle",
    },
    size: {
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 0.1,
        speed: 20,
        startValue: "max",
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 10,
    },
    stroke: {
      color: {
        value: "#7fffd4",
      },
      width: 0,
      opacity: 1,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
};

export default About;
