import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../etc/section-title";
import ContactIcon from "./contact-icon";

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
    };
  }

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
      <Container
        id="contact"
        fluid={true}
        className="text-center bg-white pt-5 pb-5"
      >
        <SectionTitle text="Contact" />
        <Row>
          <Col>
            <h4>Feel free to contact me at:</h4>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <ContactIcon
            href="mailto:ryantran2165@gmail.com"
            icon={faEnvelope}
            text="ryantran2165@gmail.com"
          />
          <ContactIcon
            href="tel:1-669-282-2213"
            icon={faPhoneAlt}
            text="(669) 282-2213"
          />
        </Row>
        <Row>
          <Col>
            <h4 className="mt-4 mb-3">Or send me a message directly:</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={6}>
            <Form
              name="gform"
              id="gform"
              encType="text/plain"
              action="https://docs.google.com/forms/d/e/1FAIpQLSeIBBJXMDcObspDCy4z-nJJps2AmhkP4JVNFEiSPT7qhG9Law/formResponse?"
              target="hidden_iframe"
              onSubmit={(e) => this.handleFormSubmit(e)}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.handleFormChange(e, "name")}
                  className="form-control"
                  name="entry.1568045103"
                  id="entry.1568045103"
                  placeholder="Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.handleFormChange(e, "email")}
                  className="form-control"
                  name="entry.1246301993"
                  id="entry.1246301993"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={this.state.subject}
                  onChange={(e) => this.handleFormChange(e, "subject")}
                  className="form-control"
                  name="entry.1608794007"
                  id="entry.1608794007"
                  placeholder="Subject"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  value={this.state.message}
                  onChange={(e) => this.handleFormChange(e, "message")}
                  className="form-control"
                  rows="5"
                  name="entry.485311975"
                  id="entry.485311975"
                  placeholder="Message"
                  required
                />
              </Form.Group>
              <ReCAPTCHA
                sitekey="6Lck7QMaAAAAAFNA8qdBS969E3BUcoKOm2IyjDhd"
                onChange={this.onChange}
              />
              {this.state.recaptchaSuccess && (
                <Button
                  className="mt-3"
                  type="submit"
                  value="Submit"
                  onClick={(e) => e.target.blur()}
                >
                  Submit
                </Button>
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
