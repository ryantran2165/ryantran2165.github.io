import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../etc/section-title";
import ContactIcon from "./contact-icon";

const RECAPTCHA_KEY = "6Lck7QMaAAAAAFNA8qdBS969E3BUcoKOm2IyjDhd";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingModal: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptchaSuccess: false,
      isMobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    // For email line break on mobile
    this.setState({ isMobile: window.innerWidth < 576 });
  };

  onChange = () => {
    this.setState({ recaptchaSuccess: true });
  };

  handleFormSubmit = (e) => {
    // Show modal
    this.setState({ showingModal: true });

    // In order to submit to google forms
    e.preventDefault();
    e.target.submit();

    // Clear form
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  handleHideModal = () => {
    this.setState({ showingModal: false });
  };

  handleFormChange = (e, state) => {
    this.setState({ [state]: e.target.value });
  };

  render() {
    return (
      <Container id="contact" fluid className="text-center pt-5 mb-7">
        <SectionTitle text="Contact" />
        <Row className="justify-content-center mx-2">
          <Col xs={12} md={10} lg={8} xl={6}>
            <Row className="justify-content-center">
              <Col xs={6} data-aos="fade-down" data-aos-delay="200">
                <ContactIcon href="mailto:ryantran2165@gmail.com" icon={faEnvelope} />
                <h6 className="mt-2">ryantran2165{this.state.isMobile && <br />}@gmail.com</h6>
              </Col>
              <Col xs={6} data-aos="fade-down" data-aos-delay="200">
                <ContactIcon href="tel:1-669-282-2213" icon={faPhoneAlt} />
                <h6 className="mt-2">(669) 282-2213</h6>
              </Col>
            </Row>
            <Form
              className="mt-3 text-left"
              name="gform"
              id="gform"
              encType="text/plain"
              action="https://docs.google.com/forms/d/e/1FAIpQLSeIBBJXMDcObspDCy4z-nJJps2AmhkP4JVNFEiSPT7qhG9Law/formResponse?"
              target="hidden_iframe"
              onSubmit={(e) => this.handleFormSubmit(e)}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.handleFormChange(e, "name")}
                  name="entry.1568045103"
                  id="entry.1568045103"
                  placeholder="John Doe"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleFormChange(e, "email")}
                  name="entry.1246301993"
                  id="entry.1246301993"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.subject}
                  onChange={(e) => this.handleFormChange(e, "subject")}
                  name="entry.1608794007"
                  id="entry.1608794007"
                  placeholder="!false"
                  required
                />
              </Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  value={this.state.message}
                  onChange={(e) => this.handleFormChange(e, "message")}
                  rows="5"
                  name="entry.485311975"
                  id="entry.485311975"
                  placeholder="It's funny because it's true"
                  required
                />
              </Form.Group>
              {!this.state.recaptchaSuccess && (
                <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={this.onChange} />
              )}
              {this.state.recaptchaSuccess && (
                <Form.Group className="text-left">
                  <Button type="submit" value="Submit" onClick={(e) => e.target.blur()}>
                    Submit
                  </Button>
                </Form.Group>
              )}
            </Form>
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: "none" }}
              title="formFrame"
            ></iframe>
            <Modal show={this.state.showingModal} onHide={this.handleHideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Message successfully sent!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thank you for your message!
                <br />
                I'll try to get back to you ASAP.
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
