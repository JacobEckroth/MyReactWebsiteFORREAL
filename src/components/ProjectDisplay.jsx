import React from "react";
import "../css/project.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

class ProjectDisplay extends React.Component {
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      title: this.props.title,
      link: this.props.link,
      descriptionText: this.props.descriptionText,
      imageURL: this.props.imageURL,
      imageAlt: this.props.imageAlt,
        linkName:this.props.linkName
    };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ showing: true });
  }
  
  render() {
    return (
  
    <Card 
    className={
        this.state.showing
          ? "projectCard showIt"
          : "projectCard notShowing"
      }
    
    key={this.state.keyValue}>
        <Card.Img alt={this.state.imageAlt} className="projectImage" variant="top" src={this.state.imageURL} />
        <Card.Body>
        <Card.Title className="projectTitle">{this.state.title}</Card.Title>
        <Card.Text className="projectText">{this.state.descriptionText}
            
        </Card.Text>
        <Button className="linkButton" variant="primary" href={this.state.link}>{this.state.linkName}</Button>
        </Card.Body>
    </Card>
      
    );

    
  }
}

export default ProjectDisplay;
