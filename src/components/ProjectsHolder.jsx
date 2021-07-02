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
    this.getProjectsNotConnected = this.getProjectsNotConnected.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    //this.getProjects();
    this.getProjectsNotConnected();
  }
  getProjectsNotConnected(){
    var projects = [{"_id":"60dd119e1b3ffe61afaad710","name":"Collage Creator","dateFinished":"2021-06-01T07:00:00.000Z","dateUpdated":"2021-06-01T07:00:00.000Z","description":"A simple website you can use to create collages that I created for my Software Engineering Class","githubLink":"https://github.com/Jacob-Eckroth-School/361-ImageCollageCreator","imageAlt":"Collage Website Image","imageLink":"https://jacobeckroth.com/images/projectImages/collage.jpg","portfolioLink":null,"projectLink":"https://collage.jacobeckroth.com","techStack":["Express","Handlebars","NodeJS"],"youtubeLink":"https://youtu.be/foGSwIaOSik?t=551","dateStarted":"2021-04-29T07:00:00.000Z"},{"_id":"60dd4e392af49754b0ce3fe7","name":"My Personal Website","dateFinished":null,"dateUpdated":"2021-06-30T07:00:00.000Z","description":"My personal website, made using React.","githubLink":"https://github.com/JacobEckroth/MyReactWebsiteFORREAL","imageAlt":"Personal Website Image","imageLink":"https://jacobeckroth.com/images/projectImages/personalWebsite.jpg","portfolioLink":null,"projectLink":"https://jacobeckroth.com","techStack":["React","NodeJS","MongoDB","Bootstrap"],"youtubeLink":null,"DateStarted":"2021-04-26T07:00:00.000Z"},{"_id":"60dd4ee92af49754b0ce3fe8","name":"Portfolio","dateFinished":null,"dateUpdated":"2021-06-29T07:00:00.000Z","description":"My portfolio website, made using Express and handlebars.","githubLink":"https://github.com/JacobEckroth/PortfolioWebsite","imageAlt":"Portfolio Website Image","imageLink":"https://jacobeckroth.com/images/projectImages/portfolioWebsite.jpg","portfolioLink":null,"projectLink":"https://portfolio.jacobeckroth.com/","techStack":["Express","NodeJS","Handlebars","Bootstrap"],"youtubeLink":null,"DateStarted":"2021-04-26T07:00:00.000Z"},{"_id":"60dd50c12af49754b0ce3fe9","name":"2048+ Game","dateFinished":"2020-09-09T07:00:00.000Z","dateUpdated":"2020-09-09T07:00:00.000Z","description":"One of the first games I made in C++ using SDL2. A simple 2048 game where you can expand the board size.","githubLink":"https://github.com/JacobEckroth/2048","imageAlt":"2048 Game Image","imageLink":"https://jacobeckroth.com/images/projectImages/2048.png","portfolioLink":null,"projectLink":"https://jacobeckroth.itch.io/2048","techStack":["C++","SDL2"],"youtubeLink":"https://youtu.be/fcBZbmNs66s","itchIOLink":"https://jacobeckroth.itch.io/2048","DateStarted":"2020-11-11T07:00:00.000Z"},{"_id":"60dd51b92af49754b0ce3fea","name":"Chess (Part 1)","dateFinished":"2021-04-25T07:00:00.000Z","dateUpdated":"2021-04-25T07:00:00.000Z","description":"The first part of a chess engine. I completely implemented all of the functionalities for chess including checkmate, en-passant, and promoting.","githubLink":"https://github.com/JacobEckroth/BetterChess","imageAlt":"Chess Game Image","imageLink":"https://jacobeckroth.com/images/projectImages/chessPartOne.jpg","portfolioLink":"https://portfolio.jacobeckroth.com/chessPartOne","projectLink":null,"techStack":["C++","SDL2"],"youtubeLink":"https://youtu.be/kwQk5A26cis","DateStarted":"2021-03-14T08:00:00.000Z"},{"_id":"60dd52a42af49754b0ce3feb","name":"OpenGL Clock","dateFinished":"2020-09-06T07:00:00.000Z","dateUpdated":"2020-09-06T07:00:00.000Z","description":"My final project for my Computer Graphics class, a real-time clock in OpenGL","githubLink":"https://github.com/JacobEckroth/openGL-Clock","imageAlt":"OpenGL Clock Image","imageLink":"https://jacobeckroth.com/images/projectImages/openGLClock.png","portfolioLink":"https://portfolio.jacobeckroth.com/openGLClock","projectLink":null,"techStack":["C++","OpenGL","GLSL"],"youtubeLink":"https://youtu.be/DsrdUbZLZVY","DateStarted":"2020-08-23T07:00:00.000Z"},{"_id":"60dd9aaf89039f338c01d70d","name":"Heatwaves Shader","dateFinished":"2021-03-11T08:00:00.000Z","dateUpdated":"2021-03-11T08:00:00.000Z","description":"My final project for my computer shaders class, using a vertex and fragment shader to simulate heat waves on an image.","githubLink":"https://github.com/Jacob-Eckroth-School/457-FinalProject","imageAlt":"Heat Wave Image","imageLink":"https://jacobeckroth.com/images/projectImages/heatwaves.png","portfolioLink":null,"projectLink":null,"techStack":["GLSL"],"youtubeLink":"https://www.youtube.com/watch?v=Uwu6d-Hsqvw&feature=youtu.be","DateStarted":"2021-02-23T08:00:00.000Z"}]
    
    var cards = projects.map((item) => (
        <FlipCard projectData={item} />
    ));
    this.setState({
        projects: cards,
    });
  }
  getProjects() {
    var self = this;
    axios
      .get("/getAllProjects")
      .then(function (response) {
        if (response.status === 200) {
          var projects = response.data;
            console.log("we're rocking rocking and rolling");
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
