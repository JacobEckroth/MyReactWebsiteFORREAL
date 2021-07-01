import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "../css/slideUpComponent.css";
class SlideUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      sensorActive: true,
    };
    this.onChange = this.onChange.bind(this);
    this.slideUp = this.slideUp.bind(this);
  }

  onChange(isVisible) {
    if (isVisible) {
      this.slideUp();
    }
  }
  slideUp() {
    if (this.state.hasLoaded === false) {
      this.setState({ hasLoaded: true, sensorActive: false });
    }
  }

  render() {
    return (
      <VisibilitySensor
        partialVisibility={true}
        delayedCall={true}
        onChange={this.onChange}
        active={this.state.sensorActive}
      >
        <div
          className={
            this.state.hasLoaded
              ? `slideUpComponent slidUp ${this.props.styleName}`
              : `slideUpComponent pushedDown ${this.props.styleName}`
          }
        >
          {this.props.children}
        </div>
      </VisibilitySensor>
    );
  }
}

export default SlideUpComponent;
