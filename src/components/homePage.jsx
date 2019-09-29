import React, { Component } from "react";
import { Player } from "video-react";
import { Container, Col, Row } from "react-bootstrap";
import Completed from "./completed";
import Timer from "react-compound-timer";
import SimpleStorage, { resetParentState } from "react-simple-storage";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.nextVideo = {
      name: "Effects of Relationship breakdown",
      videoSource:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      transcript: "Transcript text for Effects of Relationship breakdown",
      summary: "summary text for Effects of Relationship breakdown",
      completionTime: 3000,
      completed: "false",
      buttonStatus: true,
      position: 1
    };
    this.prevVideo = {};
    this.nextButtonText = "Start";
    this.state = {
      completedCount: 1,
      currentVideo: {
        name: "Introduction",
        videoSource: "http://techslides.com/demos/sample-videos/small.mp4",
        transcript: "Transcript text for Introduction",
        summary: "summary text for Introduction",
        completionTime: 3000,
        completed: "false",
        buttonStatus: true,
        position: 0
      },
      topics: [
        {
          name: "Effects of Relationship breakdown",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          transcript: "Transcript text for Effects of Relationship breakdown",
          summary: "summary text for Effects of Relationship breakdown",
          completionTime: 3000,
          completed: "false",
          buttonStatus: true,
          position: 1
        },
        {
          name: "Legal Issues",
          videoSource:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          transcript: "Transcript text for Legal Issues",
          summary: "summary text for Legal Issues",
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
          summary: "summary text for Options for Dispute Resolution",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 3
        },
        {
          name: "Seperation Agreement",
          videoSource: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
          transcript: "Transcript text for Seperation Agreement",
          summary: "summary text for Seperation Agreement",
          completionTime: 3000,
          completed: "false",
          buttonStatus: false,
          position: 4
        },
        {
          name: "Division of Property",
          videoSource:
            "http://media.w3.org/2010/04/html5-meetup-paris-avril-2010.mp4",
          transcript: "Transcript text for Division of Property",
          summary: "summary text for Division of Property",
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
          summary: "summary text for Spousal Support",
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
          summary: "summary text for Using the court to resolve disputes",
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
          summary: "summary text for Helping children survive after separation",
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
          summary: "summary text for Child Support",
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
          summary: "summary text for Parenting Plans",
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
    for (var key = 0; key < this.state.topics.length - 1; key++) {
      if (this.state.topics[key].name === this.state.currentVideo.name) {
        this.nextVideo = this.state.topics[key + 1];
        if (key > 0) {
          this.prevVideo = this.state.topics[key - 1];
        }
        break;
      }
    }
    if (this.state.currentVideo.position > 0) {
      this.nextButtonText = "Next Lesson";
      if (this.state.currentVideo.position === 7) {
        this.nextButtonText = "Go to Part 2";
      }
    }
    return (
      <div>
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
                  <h2>Family Law Information Program (FLIP) - Online</h2>
                </Row>
                <Row>
                  <p>
                    Online version of the FLIP covering information about
                    separation, divorce, alternatives to court and the legal
                    process in Ontario.
                  </p>
                </Row>
                <Row>
                  <Col xs={8}>
                    <hr />
                    <h4>{this.state.currentVideo.name}</h4>
                    <p>{this.state.currentVideo.summary}</p>

                    <Player
                      autoPlay
                      ref={player => {
                        this.player = player;
                      }}
                      playsInline
                      poster="/assets/poster.png"
                      src={this.state.currentVideo.videoSource}
                    />
                    <h5>Video Transcript</h5>
                    <p>{this.state.currentVideo.transcript}</p>

                    <div onClick={reset}>
                      {this.state.currentVideo.position > 1 && (
                        <button
                          data-videosource={this.prevVideo.videoSource}
                          data-topicname={this.prevVideo.name}
                          data-summarytext={this.prevVideo.summary}
                          data-transcript={this.prevVideo.transcript}
                          data-completed={this.prevVideo.completed}
                          data-completiontime={this.prevVideo.completionTime}
                          data-position={this.prevVideo.position}
                          data-buttonstatus={this.prevVideo.buttonStatus}
                          onClick={this.handleVideoChange}
                        >
                          Back
                        </button>
                      )}
                      {this.state.currentVideo.position < 10 && (
                        <button
                          data-videosource={this.nextVideo.videoSource}
                          data-topicname={this.nextVideo.name}
                          data-summarytext={this.nextVideo.summary}
                          data-transcript={this.nextVideo.transcript}
                          data-completed={this.nextVideo.completed}
                          data-completiontime={this.nextVideo.completionTime}
                          data-position={this.nextVideo.position}
                          data-buttonstatus={this.nextVideo.buttonStatus}
                          disabled={!this.nextVideo.buttonStatus}
                          onClick={this.handleVideoChange}
                        >
                          {this.nextButtonText}
                        </button>
                      )}
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Timer.Minutes /> minutes
                    <Timer.Seconds /> seconds
                    <h2>Your Progress</h2>
                    <b>Part 1</b>
                    <ul>
                      {this.state.topics.slice(0, 7).map(topic => (
                        <Row key={topic.name} onClick={reset}>
                          <Col xs={10}>
                            <button
                              className={
                                topic.buttonStatus
                                  ? "topics-list text-left-align"
                                  : "topics-list disabled text-left-align"
                              }
                              data-videosource={topic.videoSource}
                              data-topicname={topic.name}
                              data-summarytext={topic.summary}
                              data-transcript={topic.transcript}
                              data-completed={topic.completed}
                              data-completiontime={topic.completionTime}
                              data-position={topic.position}
                              data-buttonstatus={topic.buttonStatus}
                              onClick={this.handleVideoChange}
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
                    </ul>
                    <button
                      disabled={
                        (this.state.currentVideo.position < 7 ||
                          this.state.currentVideo.completed === "false") &&
                        this.state.currentVideo.position < 8
                      }
                    >
                      Confirm Part 1 Completion
                    </button>
                    <b>Part 2</b>
                    <ul>
                      {this.state.topics.slice(7, 10).map(topic => (
                        <Row key={topic.name} onClick={reset}>
                          <Col xs={10}>
                            <button
                              className={
                                topic.buttonStatus
                                  ? "topics-list text-left-align"
                                  : "topics-list disabled text-left-align"
                              }
                              data-videosource={topic.videoSource}
                              data-topicname={topic.name}
                              data-summarytext={topic.summary}
                              data-transcript={topic.transcript}
                              data-completed={topic.completed}
                              data-completiontime={topic.completionTime}
                              data-position={topic.position}
                              data-buttonstatus={topic.buttonStatus}
                              onClick={this.handleVideoChange}
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
                    </ul>
                    <button
                      disabled={
                        this.state.currentVideo.position < 10 ||
                        this.state.currentVideo.completed === "false"
                      }
                    >
                      Confirm Part 1 + 2 Completion
                    </button>
                  </Col>
                </Row>
              </Container>

              <div>
                {/* {this.state.completedCount >= this.state.topics.length + 1 && ( */}
                <div>
                  Clear Local Storage
                  <button
                    onClick={() => resetParentState(this, this.initialState)}
                  >
                    Clear
                  </button>
                </div>
                {/* )} */}
              </div>
            </React.Fragment>
          )}
        </Timer>
      </div>
    );
  }

  handleVideoChange = ev => {
    if (this.nextButtonText === "Go to Part 2") {
      console.log("abh tak okay");
    } else {
      let currentVideo = { ...this.state.currentVideo };
      currentVideo.name = ev.target.dataset.topicname;
      currentVideo.videoSource = ev.target.dataset.videosource;
      currentVideo.transcript = ev.target.dataset.transcript;
      currentVideo.completionTime = ev.target.dataset.completiontime;
      currentVideo.completed = ev.target.dataset.completed;
      currentVideo.summary = ev.target.dataset.summarytext;
      currentVideo.position = ev.target.dataset.position;
      currentVideo.buttonStatus = Boolean(ev.target.dataset.buttonstatus);
      if (currentVideo.position > 0) {
        this.nextButtonText = "Next Lesson";
      }
      this.setState({ currentVideo });
    }
  };

  handleTimerChange = () => {
    let topics = [...this.state.topics];
    let completedCount = 1;
    let currentVideo = { ...this.state.currentVideo };
    for (var key = 0; key < topics.length; key++) {
      if (topics[key].name === this.state.currentVideo.name) {
        topics[key].completed = "true";
        topics[key].buttonStatus = true;
        if (key < topics.length - 1) topics[key + 1].buttonStatus = true;
        currentVideo = topics[key];
      }
      if (topics[key].completed === "true") {
        completedCount = completedCount + 1;
      }
    }
    this.setState({ topics, completedCount, currentVideo });
  };
}

export default HomePage;
