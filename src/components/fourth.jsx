import React, { Component } from "react"
import { Container,Row ,Col} from "react-bootstrap";

class Fourth extends Component {
  render() {
    const { email } = this.props
    return (
    <React.Fragment>
      <Container>
      <Row>
        <Col xs={10} className="hr-div">
          <hr className="hr-line" />
        </Col>
        
      </Row>
      <Row className="title-font content-title bottom-pad-three">Submission successful!</Row>
      <Row className="content-font email-desc">
      <div>
      An email has been sent to <strong> {email}</strong> with proof of completion along with details about next steps to take.
      </div>
      </Row>
      </Container>
    </React.Fragment>
  )}
}

export default Fourth
