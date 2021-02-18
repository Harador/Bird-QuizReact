import "./App.css";
import "./Adaptive.css";
import data from "./dbBirds";
import React from "react";
import { Logo, Menu, Main, Content, Footer, Win } from "./modules";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      trueBird: this.getRandom(0, 5),
      trueAnswer: false,
      selectBird: false,
      score: 0,
      win: false,
      selectLi: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
      },
    };
    this.getTrueAnswer = this.getTrueAnswer.bind(this);
  }
  changeTime = (type, current, duration) => {
    type == "main"
      ? this.setState({
          currentTimeMain: current,
          durationTimeMain: duration,
        })
      : this.setState({
          currentTimeContent: current,
          durationTimeContent: duration,
        });
  };
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getTrueAnswer() {
    this.setState({
      trueAnswer: true,
    });
  }
  changeSelectLi = (num, value) => {
    this.setState({ selectLi: { ...this.state.selectLi, [num]: value } });
  };
  showBird = (name) => {
    let selectBird = data[this.state.currentSection].filter(
      (chirik) => chirik.name == name
    )[0];
    this.setState({ selectBird: selectBird });
  };
  nextSection = () => {
    let section = this.state.currentSection;
    let newScore = this.calcScore(this.state);
    if (section === 5) {
      this.setState({
        currentSection: 0,
        score: newScore,
        win: true,
      });
    } else {
      this.setState({
        currentSection: ++section,
        trueBird: this.getRandom(0, 5),
        trueAnswer: false,
        score: newScore,
        win: false,
        selectBird: false,
        selectLi: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
        },
      });
    }
  };
  newGame = () => {
    this.setState({
      currentSection: 0,
      trueBird: this.getRandom(0, 5),
      trueAnswer: false,
      selectBird: false,
      score: 0,
      win: false,
      selectLi: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
      },
    });
  };
  calcScore = (state) => {
    let stateScore = state.score;
    let newscore = 5;
    let obj = state.selectLi;
    for (let el in obj) {
      if (obj[el] === "false" && newscore > 0) {
        --newscore;
      }
    }
    newscore += stateScore;
    return newscore;
  };
  render() {
    let {
      currentSection,
      trueBird,
      trueAnswer,
      selectBird,
      selectLi,
    } = this.state;
    return (
      <div className="wrapper">
        <Logo score={this.state.score} />
        <Menu currentSection={this.state.currentSection} />
        {!this.state.win ? (
          <>
            <Main
              bird={data[currentSection][trueBird]}
              trueAnswer={trueAnswer}
            />
            <Content
              currentSection={data[currentSection]}
              trueBird={data[currentSection][trueBird]}
              getTrueAnswer={this.getTrueAnswer}
              trueAnswer={trueAnswer}
              selectBird={selectBird}
              showBird={this.showBird}
              selectLi={selectLi}
              changeSelectLi={this.changeSelectLi}
            />
            <Footer
              nextSection={this.nextSection}
              trueAnswer={this.state.trueAnswer}
            />
          </>
        ) : (
          <Win score={this.state.score} newGame={this.newGame} />
        )}
      </div>
    );
  }
}

export default App;
