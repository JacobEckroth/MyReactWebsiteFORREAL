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
        visible: false,
        title: this.props.title,
        link: this.props.link,
        descriptionText:this.props.descriptionText,
        imageURL:this.props.imageURL,
        imageAlt:this.props.imageAlt

    };
      this.show = this.show.bind(this);
      
    
      
  }
  
 
  show() {
    this.setState({ visible: true });
    console.log("I am showing myself");
  }
  render() {
    return (
        
      <div
        className={
          this.state.visible ? "projectHolder showIt": "projectHolder invisible"
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
