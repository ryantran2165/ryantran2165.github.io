import React from "react";
import Container from "react-bootstrap/Container";
import SectionTitle from "../section-title";
import ExperienceItem from "./experience-item";

const Experience = () => {
  return (
    <Container id="experience" fluid={true} className="text-center pt-5 pb-5">
      <SectionTitle text="Experience" />
      <ExperienceItem
        title="Front-End Developer"
        company="MediRev Solutions"
        location="San Jose, CA"
        startDate="Mar. 2018"
        endDate="Jul. 2018"
        description="At MediRev Solutions, I designed and created the company website and logo. To create the website, I used WordPress and some CSS instead of creating a static HTML website per the request that the website content be easily modified by non-developers; the easiest way to honor this request was through the use of WordPress. And to create the company logo as an easily scalable vector graphic, I used Adobe Illustrator. *MediRev Solutions is no longer active."
      />
      <br />
      <ExperienceItem
        title="Developer Connection Intern"
        company="Samsung Electronics America"
        location="Mountain View, CA"
        startDate="Jun. 2017"
        endDate="Oct. 2017"
        description="At Samsung, my largest task was to learn Unity, Unity Virtual Reality, and C# independently and then update an outdated Samsung Unity Virtual Reality workshop tutorial to be used at various trade shows. I was able to quickly teach myself Unity within a few days, made my own small Unity Virtual Reality arcade game to test and apply my newly acquired knowledge, and ultimately finished my assigned task in half the expected time. Other tasks included managing inventory, marketing for SDC2017 at a UC Berkeley marketing event, and preparing various other necessities for SDC2017."
      />
    </Container>
  );
};

export default Experience;
