import React, { Component } from "react";
import { Player } from "video-react";
import { Container, Col, Row } from "react-bootstrap";
import Completed from "./completed";
import Timer from "react-compound-timer";
import ShowMoreText from "react-show-more-text";
import clock from "../assets/clock.png";
import SimpleStorage, { resetParentState } from "react-simple-storage";

class First extends Component {
  constructor(props) {
    super(props);
    this.nextVideo = {
      name: "Effects of Relationship breakdown",
      videoSource:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      transcript: "Transcript text for Effects of Relationship breakdown",
      summary:
        "An overview of the Family Law Information Program about your legal rights and obligations. ",
      completionTime: 3000,
      completed: "false",
      buttonStatus: true,
      position: 1
    };

    this.prevVideo = {};
    this.nextButtonText = "Next lesson";
    this.state = {
      completedCount: 1,

      currentVideo: {
        name: "Introduction",
        videoSource: "/onlineflip/introduction.mov",
        transcript:
          "Welcome to the  Introduction to Separation and Divorce course. You are here because you are separating or divorcing, and have a child or children together and it is important that you have information about how separation affects you, information on the legal issues that you may face, the dispute resolution processes, and going to court. We hope that this course will provide you with helpful information as well as new ideas that will guide you during this time of change for your family. This course takes one and a half hours to complete, whether you attend a session in person, or complete it online. The online course contains the very same information that any other person would receive if they attend any of the in-person sessions in the province.Please note that this course does not give you advice about your individual case.  It will only be able to give you general information. It does not give you legal advice. When people go through separation and divorce, they can experience a lot of negative emotions. It is important that you know that your emotions can impact the resolution of the legal issues in your case. The more upset that you are, the more your case may cost you and the more it will affect your children. It is important that you look after yourself. We hope you will find this information helpful as you go through your separation. The purpose of this course is to: Help you understand the options available for dealing with the legal and emotional issues related to the ending of a relationship To provide you with information about legal issues Provide you with information about resources in your community that can help. If you or your former party have already started a family court case, you are each required to take this course before the case can proceed. After you complete this course, you will be emailed an electronic certificate of completion. You must file your certificate in your Continuing Record and you can do so the next time you go to the court. Family Law Information Centres, also referred to as “FLICs”, are located in most family courthouses.  They offer free information about divorce, separation and related family law issues like child custody, access, support, property division and child protection and referrals to community resources, including non-legal resources and alternatives to litigation like mediation. FLICs provide services on a first-come, first-served basis, so you may have to wait to speak to a staff member. Each FLIC has a variety of publications available addressing family law issues. You can also get copies of the Ministry’s Guides to court procedures at any FLIC location or on the Ministry’s website. Court staff, Information and Referral Coordinators and Advice Lawyers are also available at designated hours, so you may wish to call the FLIC beforehand. There are many legal and community services that may be helpful to you and your family during this difficult time. These organizations may have services to help you and your former partner resolve your family disputes.  They may also offer other services to help you and your children cope with the changes to your family.  Many of the services do not charge fees, although some do. Just like when choosing a lawyer, it’s important to make sure you understand what the costs associated with a service are and that you ask questions about the person or organization’s qualifications and experience. You have the right to a bilingual court proceeding in all courts in Ontario that hear family matters. This right, once exercised, extends to all hearings associated with the case (trials, motions, pre-trials, etc.), unless the party specifies that he or she wants only one or more hearings to be bilingual. ",
        summary:
          "An overview of the Family Law Information Program about your legal rights and obligations. ",
        completionTime: 3000,
        completed: "false",
        buttonStatus: true,
        position: 0
      },
      topics: [
        {
          name: "Introduction",
          videoSource: "/onlineflip/introduction.mov",
          transcript:
            "Welcome to the  Introduction to Separation and Divorce course. You are here because you are separating or divorcing, and have a child or children together and it is important that you have information about how separation affects you, information on the legal issues that you may face, the dispute resolution processes, and going to court. We hope that this course will provide you with helpful information as well as new ideas that will guide you during this time of change for your family. This course takes one and a half hours to complete, whether you attend a session in person, or complete it online. The online course contains the very same information that any other person would receive if they attend any of the in-person sessions in the province.Please note that this course does not give you advice about your individual case.  It will only be able to give you general information. It does not give you legal advice. When people go through separation and divorce, they can experience a lot of negative emotions. It is important that you know that your emotions can impact the resolution of the legal issues in your case. The more upset that you are, the more your case may cost you and the more it will affect your children. It is important that you look after yourself. We hope you will find this information helpful as you go through your separation. The purpose of this course is to: Help you understand the options available for dealing with the legal and emotional issues related to the ending of a relationship To provide you with information about legal issues Provide you with information about resources in your community that can help. If you or your former party have already started a family court case, you are each required to take this course before the case can proceed. After you complete this course, you will be emailed an electronic certificate of completion. You must file your certificate in your Continuing Record and you can do so the next time you go to the court. Family Law Information Centres, also referred to as “FLICs”, are located in most family courthouses.  They offer free information about divorce, separation and related family law issues like child custody, access, support, property division and child protection and referrals to community resources, including non-legal resources and alternatives to litigation like mediation. FLICs provide services on a first-come, first-served basis, so you may have to wait to speak to a staff member. Each FLIC has a variety of publications available addressing family law issues. You can also get copies of the Ministry’s Guides to court procedures at any FLIC location or on the Ministry’s website. Court staff, Information and Referral Coordinators and Advice Lawyers are also available at designated hours, so you may wish to call the FLIC beforehand. There are many legal and community services that may be helpful to you and your family during this difficult time. These organizations may have services to help you and your former partner resolve your family disputes.  They may also offer other services to help you and your children cope with the changes to your family.  Many of the services do not charge fees, although some do. Just like when choosing a lawyer, it’s important to make sure you understand what the costs associated with a service are and that you ask questions about the person or organization’s qualifications and experience. You have the right to a bilingual court proceeding in all courts in Ontario that hear family matters. This right, once exercised, extends to all hearings associated with the case (trials, motions, pre-trials, etc.), unless the party specifies that he or she wants only one or more hearings to be bilingual. ",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: true,
          position: 0
        },
        {
          name: "Effects of Relationship breakdown",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          transcript: "Transcript text for Effects of Relationship breakdown",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 1
        },
        {
          name: "Legal Issues",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          transcript: "Transcript text for Legal Issues",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 2
        },
        {
          name: "Options for Dispute Resolution",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          transcript: "Transcript text for Options for Dispute Resolution",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 3
        },
        {
          name: "Seperation Agreement",
          videoSource: "/onlineflip/SeparationAgreement.mov",
          transcript: "Transcript text for Seperation Agreement",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 4
        },
        {
          name: "Division of Property",
          videoSource: "/onlineflip/DivisionofProperty.mov",
          transcript: "Transcript text for Division of Property",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 5
        },
        {
          name: "Spousal Support",
          videoSource:
            "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4",
          transcript: "Transcript text for Spousal Support",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 6
        },
        {
          name: "Using the court to resolve disputes",
          videoSource:
            "http://media.w3.org/2010/04/html5-meetup-paris-avril-2010.mp4",
          transcript: "Transcript text for Using the court to resolve disputes",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 7
        },
        {
          name: "Helping children survive after separation",
          videoSource: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
          transcript:
            "Transcript text for Helping children survive after separation",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 8
        },
        {
          name: "Child Support",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          transcript: "Transcript text for Child Support",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 9
        },
        {
          name: "Parenting Plans",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          transcript: "Transcript text for Parenting Plans",
          summary:
            "An overview of the Family Law Information Program about your legal rights and obligations. ",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 10
        }
      ]
    };
    this.initialState = this.state;
  }

  render() {
    for (var key = 0; key < this.state.topics.length; key++) {
      if (this.state.topics[key].name === this.state.currentVideo.name) {
        if (this.state.topics[key + 1])
          this.nextVideo = this.state.topics[key + 1];
        if (key > 0) {
          this.prevVideo = this.state.topics[key - 1];
        }
        break;
      }
    }
    if (this.state.currentVideo.position == 0) {
      this.nextButtonText = "Start";
    } else if (this.state.currentVideo.position == 10) {
      this.nextButtonText = "Confirm Part 1 & 2 Completion";
    } else if (this.state.currentVideo.position == 7) {
      this.nextButtonText = "Confirm Part 1 Completion";
    } else {
      this.nextButtonText = "Next lesson";
    }
    if (localStorage.getItem("email_sent") === "yes") {
      localStorage.clear();
      resetParentState(this, this.initialState);
    }
    return (
      <Timer
        checkpoints={[
          {
            time: this.state.currentVideo.completionTime,
            callback: () => this.handleTimerChange()
          }
        ]}
      >
        {({ reset }) => (
          <React.Fragment>
            <SimpleStorage parent={this} />
            <Container>
              <Row>
                <Col xs={7} className="hr-div">
                  <hr className="hr-line" />
                </Col>
                <Col />
              </Row>
              <Row>
                <Col xs={7}>
                  <Row className="content-title title-font">
                    {this.state.currentVideo.name}
                  </Row>
                  <Row className="content-duration content-font">
                    <img className="clock-size" src={clock} alt="clock" /> VIDEO
                    DURATION : <b>4 minutes, 14 seconds</b>
                  </Row>
                  <Row className="content-summary content-font">
                    {this.state.currentVideo.summary}
                  </Row>

                  <Row className="bottom-pad-three">
                    <Player
                      ref={player => {
                        this.player = player;
                      }}
                      playsInline
                      src={this.state.currentVideo.videoSource}
                    />
                  </Row>

                  <Row className="transcript-title title-font bottom-pad-three">
                    Read the video transcript
                  </Row>
                  <Row className="transcript-content content-font">
                    <ShowMoreText
                      lines={3}
                      more="[Read more]"
                      less="[Read less]"
                      anchorClass=""
                      // onClick={this.executeOnClick}
                      expanded={false}
                    >
                      {this.state.currentVideo.transcript}
                    </ShowMoreText>
                  </Row>
                  <Row>
                    <Col xs={3}>
                      {this.state.currentVideo.position > 0 && (
                        <div onClick={reset}>
                          <button
                            className="button btn-back"
                            onClick={() =>
                              this.handleVideoState(this.prevVideo)
                            }
                          >
                            Back
                          </button>
                        </div>
                      )}
                    </Col>
                    <Col xs={5} />
                    <Col xs={4}>
                      <div onClick={reset}>
                        <button
                          className={
                            this.state.currentVideo.completed === "true"
                              ? "button btn-next"
                              : "button btn-next btn-disabled"
                          }
                          onClick={() =>
                            this.handleVideoChange(this.nextVideo, "btn")
                          }
                          disabled={
                            this.state.currentVideo.completed === "true"
                              ? false
                              : true
                          }
                        >
                          {this.nextButtonText}
                        </button>
                      </div>
                      {this.state.currentVideo.completed !== "true" && (
                        <div>
                          <Timer.Minutes /> : <Timer.Seconds /> until next
                          lesson available
                        </div>
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col xs={1} />
                <Col xs={4}>
                  <Container>
                    <div className="lesson-title title-font">Lesson</div>
                    <div className="menu">
                      <div className="menu-title">
                        <b>Part 1</b>
                        <p>For everyone (about 1 hour)</p>
                      </div>

                      {this.state.topics.slice(0, 8).map(topic => (
                        <Row
                          key={topic.name}
                          className={
                            topic.name === this.state.currentVideo.name
                              ? "menu-content menu-content-current"
                              : "menu-content"
                          }
                          onClick={reset}
                        >
                          <Col xs={10}>
                            <button
                              className={
                                topic.buttonStatus
                                  ? topic.name === this.state.currentVideo.name
                                    ? "topics-list text-left-align menu-content-current"
                                    : "topics-list text-left-align"
                                  : "topics-list disabled text-left-align"
                              }
                              onClick={() =>
                                this.handleVideoChange(topic, "menu")
                              }
                              disabled={!topic.buttonStatus}
                            >
                              {topic.name}
                            </button>
                          </Col>
                          <Col xs={2}>
                            <Completed status={topic.completed} />
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div className="menu">
                      <div className="menu-title">
                        <b>Part 2</b>
                        <p>For anyone with children (about 30 minutes))</p>
                      </div>

                      {this.state.topics.slice(8, 11).map(topic => (
                        <Row
                          key={topic.name}
                          className={
                            topic.name === this.state.currentVideo.name
                              ? "menu-content menu-content-current"
                              : "menu-content"
                          }
                          onClick={reset}
                        >
                          <Col xs={10}>
                            <button
                              className={
                                topic.buttonStatus
                                  ? topic.name === this.state.currentVideo.name
                                    ? "topics-list text-left-align menu-content-current"
                                    : "topics-list text-left-align"
                                  : "topics-list disabled text-left-align"
                              }
                              onClick={() =>
                                this.handleVideoChange(topic, "menu")
                              }
                              disabled={!topic.buttonStatus}
                            >
                              {topic.name}
                            </button>
                          </Col>
                          <Col xs={2}>
                            <Completed status={topic.completed} />
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </Container>
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        )}
      </Timer>
    );
  }

  handleVideoChange = (ev, type) => {
    if (this.nextButtonText === "Confirm Part 1 Completion" && type === "btn") {
      this.nextButtonText = "Next lesson";
      this.state.currentVideo = this.state.topics[8];
      this.props.onPartChange(
        "SECOND",
        "halfCompleted",
        this,
        this.initialState
      );
    } else if (
      this.nextButtonText === "Confirm Part 1 & 2 Completion" &&
      type === "btn"
    ) {
      this.props.onPartChange(
        "THIRD",
        "fullCompleted",
        this,
        this.initialState
      );
    } else {
      this.handleVideoState(ev);
    }
  };

  handleVideoState = ev => {
    let currentVideo = { ...this.state.currentVideo };
    currentVideo = ev;
    if (currentVideo.position === "7") {
      this.nextButtonText = "Confirm Part 1 Completion";
    }
    if (currentVideo.position === "7") {
      this.nextButtonText = "Confirm Part 1 Completion";
    } else if (currentVideo.position === "10") {
      this.nextButtonText = "Confirm Part 1  & 2 Completion";
    }

    this.setState({ currentVideo });
  };

  handleTimerChange = () => {
    let topics = [...this.state.topics];
    let completedCount = 1;
    let currentVideo = { ...this.state.currentVideo };
    for (var key = 0; key < topics.length; key++) {
      if (topics[key].name === currentVideo.name) {
        topics[key].completed = "true";
        topics[key].buttonStatus = true;
        if (key < topics.length && topics[key + 1])
          topics[key + 1].buttonStatus = true;
        currentVideo = topics[key];
      }
      if (topics[key].completed === "true") {
        completedCount = completedCount + 1;
      }
    }
    this.setState({ topics, completedCount, currentVideo });
  };
}

export default First;
