import React from "react";
import "../css/project.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import { SlideUpComponent } from ".";
class ProjectDisplay extends React.Component {
  componentDidMount() {
    this.createButtons();
  }
  componentWillUnmount() {}

  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData,
    };

    this.createButtons = this.createButtons.bind(this);
  }

  createButtons() {
    var currentButtons = [];
    if (this.state.projectData.projectLink) {
      currentButtons.push(
        <ListGroupItem>
          <Button
            variant="primary"
            href={this.state.projectData.projectLink}
            key="projectLink"
            title="Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </Button>
        </ListGroupItem>
      );
    }
    if (this.state.projectData.portfolioLink) {
      currentButtons.push(
        <ListGroupItem>
          <Button
            variant="secondary"
            href={this.state.projectData.portfolioLink}
            key="portfolioLink"
            title="Portfolio Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio Page
          </Button>
        </ListGroupItem>
      );
    }
    if (this.state.projectData.gitHubLink) {
      currentButtons.push(
        <ListGroupItem>
          <Button
            variant="info"
            href={this.state.projectData.gitHubLink}
            key="githubLink"
            title="Github Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Page
          </Button>
        </ListGroupItem>
      );
    }
    if (this.state.projectData.youtubeLink) {
      currentButtons.push(
        <ListGroupItem>
          <Button
            variant="danger"
            href={this.state.projectData.youtubeLink}
            key="youtubeLink"
            title="Youtube Video"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube Showcase
          </Button>
        </ListGroupItem>
      );
    }
    if (this.state.projectData.itchIOLink) {
      currentButtons.push(
        <ListGroupItem>
          <Button
            variant="dark"
            href={this.state.projectData.itchIOLink}
            key="itchIOLink"
            title="ItchIO Download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on Itch.IO
          </Button>
        </ListGroupItem>
      );
    }

    this.setState({ buttons: currentButtons });
  }

  render() {
    return (
        <SlideUpComponent styleName="projectCard" key={this.state.keyValue}>
        <Card>
             
          <Card.Img
            alt={this.state.projectData.imageAlt}
            className="projectImage"
            variant="top"
            src={this.state.projectData.imageLink}
          />
          <Card.Body>
            <Card.Title className="projectTitle">
              {this.state.projectData.name}
            </Card.Title>
            <Card.Text className="projectText">
              {this.state.projectData.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {this.state.buttons}
          </ListGroup> 
        </Card>
        </SlideUpComponent>
        
    );
  }
}

export default ProjectDisplay;
