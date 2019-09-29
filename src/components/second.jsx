import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class Second extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={10} className="hr-div">
              <hr className="hr-line" />
            </Col>
            <Col />
          </Row>
          <Row className="conten-font confirmation-question">
            Do you need to complete Part 2 : For anyone with children?
          </Row>
          <div className="confirmation-content font-weight-sixhun row">
            You must complete Part 2 if you have children...
          </div>
          <div className="confirmation-content row">
            • Under the age of 16 or
          </div>

          <div className="confirmation-content row bottom-pad-three ">
            • Over the age of 16 and rely on parents or guardians for financial
            support
          </div>

          <Row>
            <Col xs={2}>
              <button
                className="button btn-next"
                onClick={() => this.handlePartChange("FIRST")}
              >
                Start Part2
              </button>
            </Col>

            <Col xs={2}>
              <button
                onClick={() => this.handlePartChange("THIRD")}
                className="button btn-back"
              >
                Stop here
              </button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
  handlePartChange = page => {
    this.props.onPartChange(page, "halfCompleted");
  };
}

export default Second;
