import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Container, Col, Row } from "react-bootstrap";
import Email from "./email";
import * as emailjs from "emailjs-com";
import { resetParentState } from "react-simple-storage";

class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      court: "",
      email: "",
      confirmEmail: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePartChange = this.handlePartChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePartChange(params) {
    this.props.onPartChange(params);
  }

  async handleSubmit(e) {
    e.preventDefault();
    resetParentState(this.props.cacheThis, this.props.cacheThisInitial);
    localStorage.clear();
    localStorage.setItem("email_sent", "yes");
    this.props.onPartChange("FOURTH");
    this.props.email(this.state.email);
    const { name, court, email } = this.state
    const parts = this.props.partCompleted === "halfCompleted" ? "Part 1" : "Part 1 & 2"

    let templateParams = {
      from_name: "Ministry of Ontario Attorney General",
      to_name: email,
      name: name,
      legal_name: name,
      court: court,
      email: email,
      parts: parts
    };

    emailjs.send(
      "default_service",
      "template_PMjk4gct",
      templateParams,
      "user_dPrgyLqCpYyMzpepmdjKQ"
    );
    console.log("sent!");
  }

  render() {
    const completion = this.props.partCompleted === "halfCompleted" ? "Part 1 completion form" : "Part 1 and part 2 completion form"
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={10} className="hr-div">
              <hr className="hr-line" />
            </Col>
            <Col />
          </Row>
          <Row className="title-font content-title ">{completion}</Row>
          <Row className="text-content email-desc bottom-pad-three">
            Please fill out the form below to recieve a confirmation email as
            proof of completion of the program
          </Row>

          <Form onSubmit={this.handleSubmit}>
            <Row>
              <FormGroup>
                <Label className="content-font email-fields" for="name">
                  Legal name
                </Label>

                <Input
                  className="email-input"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="content-font email-fields" for="court">
                  Court file number
                </Label>
                <Input
                  className="email-input"
                  type="text"
                  name="court"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Row>
            <Row>
              <Email
                {...this.props}
                handleChange={this.handleChange}
                {...this.state}
              />
            </Row>
          </Form>

          <Button
            className="btn-email-back"
            onClick={() => this.handlePartChange("FIRST")}
          >
            Back to program
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default Third;
