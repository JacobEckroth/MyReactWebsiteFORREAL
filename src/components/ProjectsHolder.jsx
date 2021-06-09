import React from "react";
import VisibilitySensorAppearingProject from "./VisibilitySensorAppearingProject"
import "../css/projectHolderCSS.css"
import data from "../data/projects.json"
const projects = data.map(item =>
    <VisibilitySensorAppearingProject 
    title={item.title}
    link = {item.link}
    descriptionText = {item.descriptionText}
    imageURL = {item.imageURL}
    imageAlt = {item.imageAlt}/>

)
class ProjectsHolder extends React.Component {
    

        

  
  render() {
    return (
      <div id="projectHolder">
          {projects}
    </div>
      
    );
  }
}

export default ProjectsHolder;