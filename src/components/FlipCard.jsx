import React from "react";
import "../css/flipcard.css";
import SlideUpComponent from "./SlideUpComponent";
import FlipCardLinkHolder from "./FlipCardLinkHolder";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class FlipCard extends React.Component {
  componentDidMount() {
    this.chooseClickLink();
    this.createDate();
  }
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData,
    };
    this.chooseClickLink = this.chooseClickLink.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.createDate = this.createDate.bind(this);
  }

  chooseClickLink() {
    var link;
    if(this.state.projectData.portfolio_link){
      link = this.state.projectData.portfolio_link;
    }else if (this.state.projectData.itch_io_link) {
      link = this.state.projectData.itch_io_link;
    } else {
      link = this.state.projectData.github_link;
    }
    this.setState({
      clickLink: link,
    });
  }
  createDate() {
    var dateString;
    var date;
    if (this.state.projectData.end_date) {
      date = new Date(this.state.projectData.end_date);
      dateString =
        "Date Finished: " +
        months[date.getMonth()] +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear();

      console.log(date);
    } else {
      date = new Date(this.state.projectData.update_date);
      dateString =
        "Date Updated: " +
        months[date.getMonth()] +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear();
    }
    this.setState({
      date: dateString,
    });
  }

  render() {
    return (
      <SlideUpComponent
        styleName="projectCard"
        key={this.state.projectData.project_id}
      >
        <div className="flip-card">
          <a
            className="flip-card-link"
            title="Check it out!"
            href={this.state.clickLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="flip-card-img"
                  src={this.state.projectData.image_link}
                  alt={this.state.projectData.alt_text}
                />
              </div>
              <div className="flip-card-back">
                <h1 className="projectTitle">{this.state.projectData.title}</h1>
                <p className="projectDescription">
                  {this.state.projectData.description}
                </p>
                <p className="dateParagraph">{this.state.date}</p>
                <FlipCardLinkHolder projectData={this.state.projectData} />
              </div>
            </div>
          </a>
        </div>
      </SlideUpComponent>
    );
  }
}

export default FlipCard;
