import React from "react";
import VisibilitySensorAppearingProject from "./VisibilitySensorAppearingProject";
import "../css/projectHolderCSS.css";
import axios from "axios";

class ProjectsHolder extends React.Component {
  constructor(props) {
  
    super(props);

    this.state = {};
    this.getProjects = this.getProjects.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    
  }
  componentDidMount(){
      this.getProjects();
  }
  getProjects() {
   var self = this;
    axios
      .get("/getAllProjects")
      .then(function (response) {
        if (response.status === 200) {
          var projects = response.data;
          var cards = projects.map((item) => (
            <VisibilitySensorAppearingProject
              title={item.name}
              link={item.projectLink}
              descriptionText={item.description}
              imageURl={item.imageLink}
              imageAlt={item.imageAlt}
              key={item._id}
              linkName="fix this later"
            />
          ));
          self.setState({
            projects: cards 
          });
        } else {
           self.setState({
            projects: <div>OH NOOOOOOOOOOOO!!!!!!</div>,
         });
        }
      })
      .catch(function (error) {
        console.log(error);
        self.setState({
          projects: <div>OH NOOOOOOOOOOOO!!!!!!</div>,
        });
      });
  }

  render() {
    return <div id="projectsHolder">{this.state.projects}</div>;
  }
}

export default ProjectsHolder;
