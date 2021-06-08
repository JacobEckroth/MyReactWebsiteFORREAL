import React from "react";
import "../css/project.css";

class ProjectDisplay extends React.Component {
  
    componentDidMount() {
        this.props.onRef(this);
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }

  constructor(props){
      super(props);
    this.state = {
        showing: false,
        title: this.props.title,
        link: this.props.link,
        descriptionText:this.props.descriptionText,
        imageURL:this.props.imageURL,
        imageAlt:this.props.imageAlt

    };
      this.show = this.show.bind(this);
      
    
      
  }
  
 
  show() {
    this.setState({ showing: true });
    
  }
  render() {
    return (
        
      <div
        className={
          this.state.showing ? "projectHolder showIt": "projectHolder notShowing"
        }
      >
        <h2 className="projectTitle">{this.state.title}</h2>
        <img src={this.state.imageURL} alt={this.state.imageAlt} className="projectImage"></img>

        <p className="projectDescription">
        
          {this.state.descriptionText}
        </p>
      </div>
    );
  }
}

export default ProjectDisplay;
