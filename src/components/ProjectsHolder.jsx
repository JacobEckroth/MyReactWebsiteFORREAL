import React from "react";
import "../css/projectHolderCSS.css";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { FlipCard } from ".";

var uhOhAlert = (
  <Alert variant="danger">
    Uh oh, something went wrong with loading the projects. I'm sorry about that.
    <Alert.Link href="/">Try reloading the page</Alert.Link>
  </Alert>
);
class ProjectsHolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getProjects = this.getProjects.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
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
            <FlipCard projectData={item} />
          ));
          self.setState({
            projects: cards,
          });
        } else {
          self.setState({
            projects: uhOhAlert,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        self.setState({
          projects: uhOhAlert,
        });
      });
  }

  render() {
    return <div id="projectsHolder">{this.state.projects}</div>;
  }
}

export default ProjectsHolder;
