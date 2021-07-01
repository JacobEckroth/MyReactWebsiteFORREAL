import React from "react";
import "../css/flipcard.css";
import SlideUpComponent from "./SlideUpComponent";

const months=["January","February","March","April","May","June","July","August","September","October","November","December"]

class FlipCard extends React.Component {
    componentDidMount(){
        this.chooseClickLink();
        this.createDate();
    }
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData
    };
    this.chooseClickLink = this.chooseClickLink.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.createDate = this.createDate.bind(this);
}
  
  chooseClickLink(){
        var link;
        if(this.state.projectData.projectLink){
            link = this.state.projectData.projectLink
        }else if(this.state.projectData.itchIOLink){
            link = this.state.projectData.itchIOLink
        }else if(this.state.projectData.portfolioLink){
            link = this.state.projectData.portfolioLink;
        }else{
            link = this.state.projectData.githubLink;
        }
        this.setState({
            clickLink:link
        });
  }
  createDate(){
      var dateString;

      if(this.state.projectData.dateFinished){
        var date = new Date(this.state.projectData.dateFinished);
        dateString = "Date Finished: "  + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        
        console.log(date);
      }else{
        var date = new Date(this.state.projectData.dateUpdated);
        dateString = "Date Updated: " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
      }
      this.setState({
          date:dateString
      })
  }

  render() {
    return (
        <SlideUpComponent styleName="projectCard" key={this.state.projectData._id}>
        <div class="flip-card">
        
        <a title="Check it out!"href={this.state.clickLink} target="_blank" rel="noopener noreferrer">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img
                class="flip-card-img"
                src={this.state.projectData.imageLink}
                alt={this.state.projectData.imageAlt}
                />
            </div>
            <div class="flip-card-back">
                <h1 class="projectTitle">{this.state.projectData.name}</h1>
                <p class="projectDescription">{this.state.projectData.description}</p>
                <p class="dateParagraph">{this.state.date}</p>
            </div>
            </div>
            </a>
        </div>
      
      </SlideUpComponent>
    );
  }
}

export default FlipCard;
