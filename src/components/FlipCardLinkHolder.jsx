import React from "react";
import "../css/flipcardLinkHolder.css";

class FlipCardLinkHolder extends React.Component {
  componentDidMount() {
    this.createLinks();
  }
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.createLinks = this.createLinks.bind(this);
  }

  createLinks() {
    var links = [];
    if (this.state.projectData.github_link) {
      links.push(
        <a
          class="linkWrapper"
          target="_blank"
          rel="noopener noreferrer"
          href={this.state.projectData.github_link}
          title="Github"
        >
          <svg
            class="linkSVG githubSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      );
    }
    if (this.state.projectData.youtube_link) {
      links.push(
        <a
          class="linkWrapper"
          target="_blank"
          rel="noopener noreferrer"
          href={this.state.projectData.youtube_link}
          title="Youtube Showcase"
        >
          <svg
            class="linkSVG youtubeSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      );
    }
   if (this.state.projectData.portfolioLink) {
      links.push(
        <a
          class="linkWrapper"
          target="_blank"
          rel="noopener noreferrer"
          href={this.state.projectData.portfolioLink}
          title="Portfolio Page"
        >
          <svg
            class="linkSVG portfolioSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" />
            </svg>
        </a>
      );
    }

    var linksInDivs = links.map((link) => <div class="linkHolder">{link}</div>);
    this.setState({
      links: linksInDivs,
    });
  }
  render() {
    return <div class="linksHolder">{this.state.links}</div>;
  }
}

export default FlipCardLinkHolder;
