import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ryanImage from "../../assets/ryan_tran.jpg";
import SectionTitle from "../section-title";

const About = () => {
  return (
    <Container id="about" fluid={true} className="text-center pt-6 pb-5">
      <SectionTitle text="Ryan L. Tran" />
      <Row className="mb-4 justify-content-center">
        <Col xs={6} md={4} xl={2}>
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
            Hi, I'm Ryan, and thanks for visiting my website! I'm a third year
            computer science undergraduate at San Jose State University. I
            started programming 5 years ago through my interest in game
            development, but I've grown to love all types of software
            development. However, I'm especially interested in artificial
            intelligence and machine learning. I'm currently looking for a
            summer software engineering internship.
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
};

export default About;
