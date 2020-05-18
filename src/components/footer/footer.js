import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import FooterIcon from "./footer-icon";

const Footer = () => {
  return (
    <footer>
      <Container fluid={true} className="text-center pt-3 pb-5">
        <Row className="justify-content-center">
          <Col xs={0}>
            <FooterIcon
              href="https://www.linkedin.com/in/ryantran2165"
              icon={faLinkedinIn}
            />
          </Col>
          <Col xs={0} className="ml-3 mr-3">
            <FooterIcon
              href="https://github.com/ryantran2165"
              icon={faGithub}
            />
          </Col>
          <Col xs={0}>
            <FooterIcon
              href={
                "https://drive.google.com/file/d/1xIw-Lj0BdPklRLcrSsA66JcTm5IKhQ5i/view?usp=sharing"
              }
              icon={faFilePdf}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
