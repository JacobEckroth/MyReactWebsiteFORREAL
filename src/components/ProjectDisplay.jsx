import React from "react";
import "../css/project.css";

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
      githubLink: this.props.githubLink,
      youtubeLink: this.props.youtubeLink,
      projectPageLink: this.props.projectPageLink,
    };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ showing: true });
  }
  getLink(){
      var youtubeLink, githubLink;
      if(this.state.youtubeLink){
        youtubeLink = <a
        className="outerYoutubeLink"
        title="Youtube Demo Video"
        href={this.state.youtubeLink}
        rel="noreferrer"
        target="_blank"
        >
        <svg
            className="youtubeLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z" />
        </svg>
        </a>
      }else{
          youtubeLink = ""
      }
      if(this.state.githubLink){
          githubLink = <a
          className="outerGithubLink"
          href={this.state.githubLink}
          rel="noreferrer"
          target="_blank"
          title="Github Repository"
          >
          <svg
              className="githubLogo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
          >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
          </svg>
          </a>
      }else{
          githubLink = ""
      }
   return <div className="linkHolder"> {youtubeLink} {githubLink}
    </div>
  }
  render() {
    return (
      <div class="biggerHolder">
        <a
          className="projectPageLink"
          href={this.state.projectPageLink}
          title="Portfolio Page"
          
        >
          <div
            key={this.state.keyValue}
            className={
              this.state.showing
                ? "projectHolder showIt"
                : "projectHolder notShowing"
            }
          >
            {this.getLink()}
            <h2 className="projectTitle">
              <a
                href={this.state.link}
                title={this.state.title}
                rel="noreferrer"
                target="_blank"
              >
                {this.state.title}
              </a>
            </h2>
            <div className="projectImageHolder">
              <img
                className="projectImage"
                src={this.state.imageURL}
                alt={this.state.imageAlt}
              />
            </div>

            <p className="projectDescription">{this.state.descriptionText}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectDisplay;
