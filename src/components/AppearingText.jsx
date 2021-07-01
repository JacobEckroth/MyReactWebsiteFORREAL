import React from "react";
import "../css/appearingText.css";
class AppearingText extends React.Component {
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  constructor(props) {
    super(props);
    this.state = {
      showingLetters: "",
      hidingLetters: this.props.text,
      timeBetweenCharacters: this.props.time / this.props.text.length,
      underScore: "_",
      blinking: true,
      started: false,
      underscoreShowing: true,
    };
    this.start = this.start.bind(this);
  }

  start() {
    if (this.state.started !== true) {
      this.setState({
        started: true,
      });
      this.blink();
      this.addACharacter();
    }
  }

  blink() {
    if (this.state.blinking === false) {
      this.setState({
        underScore: "",
      });

      return;
    }
    this.setState({
      underscoreShowing: !this.state.underscoreShowing,
    });
    if (this.state.blinking === true) {
      setTimeout(() => {
        this.blink();
      }, 500);
    } else {
      this.setState({
        underScore: "",
      });
    }
  }

  addACharacter() {
    var pause = false;
    var newShow, newHide;
    if (this.state.hidingLetters === "") {
      this.setState({
        blinking: false,
      });
      return;
    } else {
      newShow = this.state.showingLetters + this.state.hidingLetters[0];
      newHide = this.state.hidingLetters.substr(
        1,
        this.state.hidingLetters.length
      );
      this.setState({
        showingLetters: newShow,
        hidingLetters: newHide,
      });
    }
    var currentChar = newShow[newShow.length - 1];
    if (currentChar === "." || currentChar === "!" || currentChar === "?") {
      pause = true;
    }

    if (!pause) {
      setTimeout(() => {
        this.addACharacter();
      }, this.state.timeBetweenCharacters);
    } else {
      setTimeout(() => {
        this.addACharacter();
      }, this.state.timeBetweenCharacters * 5);
    }
  }

  render() {
    return (
      <div>
        <p className="typedText">
          <span>{this.state.showingLetters}</span>
          <span className={this.state.underscoreShowing ? "" : "hiding"}>
            {this.state.underScore}
          </span>
          <span className="hiding">{this.state.hidingLetters}</span>
        </p>
      </div>
    );
  }
}

export default AppearingText;
