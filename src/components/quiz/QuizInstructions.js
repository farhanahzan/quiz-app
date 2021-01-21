import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import answer from "../../assets/img/answer.png";
//import fiftyFifty from '../../assets/img/fiftyFifty.png';
import hints from "../../assets/img/hints.png";
import options from "../../assets/img/options.png";

class QuizInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settime: 4,
      setquestions: 15,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        settime: state.settime,
        setquestions: state.setquestions,
      });
    }
  }
  render() {
    const { state } = this.props.location;
    const time = this.state.settime;
    const questions = this.state.setquestions;
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Instructions -Quiz App</title>
        </Helmet>
        <div className="instructions container">
          <h1>How to Play the Game</h1>
          <p>Ensure you read this guide from start to finish</p>
          <ul className="browser-default" id="main-list">
            <li>
              The game has a duration of {time} minutes and ends as soon as your
              time elapses.
            </li>
            <li>Each game consists of {questions} questions.</li>
            <li>
              Every question contains 4 options.
              <br />
              <img src={options} alt="Quiz App options example" />
            </li>
            <li>
              Select the option which best answers the question by clicking (or
              selecting) it.
              <br />
              <img src={answer} alt="Quiz App Answer example" />
            </li>
            <li>
              Using a hint by clicking the icon
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
              will remove one wrong answer leaving two wrong answers and one
              correct answer. You can use as many hints as possible on a single
              question.
              <br />
              <img src={hints} alt="Quiz App hints example" />
            </li>
            <li>
              Feel free to quit (or retire from) the game at any time. In that
              case your score will be revealed afterwards.
            </li>
            <li>The timer starts as soon as the game loads.</li>
            <li>Let's do this if you think you've got what it takes?</li>
          </ul>
          <div>
            <span className="left">
              <Link to="/">No take me back</Link>
            </span>
            <span className="right">
              <Link to="/play/quiz">Okey, Let's do this!</Link>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default QuizInstructions;
