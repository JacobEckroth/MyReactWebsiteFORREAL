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
  }
  render() {
    return (
        
      <div
        class={
          this.state.visible
            ? " projectHolder visible"
            : "projectHolder invisible"
        }
      >
        <h2 class="projectTitle">{this.state.title}</h2>
        <img src={this.state.imageURL} alt={this.state.imageAlt} className="projectImage"></img>

        <p class="projectDescription">
        
          {this.state.descriptionText}
        </p>
      </div>
    );
  }
}

export default ProjectDisplay;
