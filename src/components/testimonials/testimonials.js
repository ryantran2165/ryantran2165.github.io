import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import suzanneImage from "../../assets/suzanne_nguyen.jpg";
import christinaImage from "../../assets/christina_hoang.jpg";
import SectionTitle from "../section-title";
import CarouselItemData from "./carousel-item-data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container fluid={true} className="text-center bg-white pt-5 pb-5">
        <SectionTitle text="Testimonials" />
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Carousel>
              <Carousel.Item>
                <CarouselItemData
                  imageSrc={suzanneImage}
                  linkedInSrc="https://www.linkedin.com/in/suzanne-nguyen"
                  name="Suzanne Nguyen"
                  title="Senior Marketing Specialist"
                  quote="Ryan worked for me as
                  an intern both at Samsung and MediRev Solutions. Ryan is a
                  quick learner and a great technical asset to our team. No
                  matter what task was sent his way, he would accomplish the
                  task with finesse. Ryan put a lot of care into producing
                  quality work no matter how difficult the task was. If he
                  didn't know the technology, he would learn it and worked hard
                  to deliver a great product."
                />
              </Carousel.Item>
              <Carousel.Item>
                <CarouselItemData
                  imageSrc={christinaImage}
                  linkedInSrc="https://www.linkedin.com/in/christina-hoang-321826111"
                  name="Christina Hoang"
                  title="Senior Program Manager"
                  quote="I have had the pleasure
                  of working with Ryan at Samsung as well as MediRev Solutions.
                  He reported directly to me at Samsung and consistently
                  delivered top quality results, efficiently completed all
                  assignments, and always exhibited a can-do attitude. Not only
                  is he an excellent communicator, he is also a self-starter who
                  thrives at driving difficult tasks from start to finish."
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
