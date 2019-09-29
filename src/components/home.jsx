import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.cacheStateThis = "";
    this.cacheStateThisInitial = "";
    this.completedPart = "";
    this.state = {
      active: "FIRST",
      email: ""
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePartChange = this.handlePartChange.bind(this);
  }

  handleEmail(email) {
    this.setState({
      email
    });
  }

  handlePartChange(part, partCompleted, cacheThis, cacheThisInitial) {
    this.cacheStateThis = cacheThis;
    this.cacheStateThisInitial = cacheThisInitial;
    this.completedPart = partCompleted;
    this.setState({
      active: part
    });
  }

  render() {
    const { active, email, currentVideo } = this.state;
    return (
      <React.Fragment>
        <Container>
          <Row className="title title-font">
            Family Law Information Program (FLIP) - Online
          </Row>
          <Row className="text-content content-font">
            Online version of the FLIP covering information about separation,
            divorce, alternatives to court and the legal process in Ontario.
          </Row>
        </Container>

        {active === "FIRST" ? (
          <First
            onPartChange={this.handlePartChange}
            currentVideo={currentVideo}
          />
        ) : active === "SECOND" ? (
          <Second onPartChange={this.handlePartChange} />
        ) : active === "THIRD" ? (
          <Third
            email={this.handleEmail}
            cacheThis={this.cacheStateThis}
            cacheThisInitial={this.cacheStateThisInitial}
            partCompleted={this.completedPart}
            onPartChange={this.handlePartChange}
          />
        ) : active === "FOURTH" ? (
          <Fourth email={email} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Home;
