import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ProjectDisplay from "./ProjectDisplay"

class VisibilitySensorAppearingProject extends Component {
  
    constructor(props){
        super(props);    
        this.onChange = this.onChange.bind(this)
       
    }

    onChange(isVisible){
        if(isVisible){
       
            this.child.show();
        }
    }

  render() {
    return (
      <VisibilitySensor
        partialVisibility={true}
        delayedCall={true}
        onChange={this.onChange}
       
      >
        <ProjectDisplay onRef={ref=>(this.child=ref)}
        title = {this.props.title}
        link = {this.props.link}
        descriptionText = {this.props.descriptionText}
        imageURL = {this.props.imageURL}
        imageAlt = {this.props.imageAlt}
        githubLink = {this.props.githubLink}
        youtubeLink = {this.props.youtubeLink}
        projectPageLink = {this.props.projectPageLink}/>
   

      </VisibilitySensor>
    );
  }
}

export default VisibilitySensorAppearingProject