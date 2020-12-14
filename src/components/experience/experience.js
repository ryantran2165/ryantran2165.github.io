import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionTitle from "../etc/section-title";
import ExperienceItem from "./experience-item";

const Experience = () => {
  return (
    <Container id="experience" fluid className="text-center py-5">
      <SectionTitle text="Experience" />
      <Row className="justify-content-center text-left mx-2">
        <Col xs={12} md={10} lg={8} xl={6}>
          <ExperienceItem
            title="Front-End Developer"
            company="MediRev Solutions"
            location="San Jose, CA"
            startDate="Mar. 2018"
            endDate="Jul. 2018"
            description="At MediRev Solutions, I designed and created the company website and logo using HTML, CSS, WordPress, and Adobe Illustrator. I opted to use WordPress, instead of creating a website from scratch, in order to meet the request that the website be quickly and easily modified by non-developers. MediRev Solutions is no longer active."
          />
          <br />
          <ExperienceItem
            title="Developer Connection Intern"
            company="Samsung Electronics America"
            location="Mountain View, CA"
            startDate="Jul. 2017"
            endDate="Oct. 2017"
            description="At Samsung, my main task was to independently learn C#, Unity, and Unity Virtual Reality to fix bugs in a Samsung Unity Virtual Reality workshop tutorial to be used at various trade shows. I taught myself C# and Unity within a few days, made my own demo Unity VR arcade game, and ultimately finished my assigned task in half the expected time. The remainder of my time was spent preparing for SDC2017, which included managing the inventory of hundreds of devices and running a marketing booth at UC Berkeley."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
