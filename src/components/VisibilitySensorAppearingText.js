import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AppearingText from "./AppearingText"
class VisibilitySensorAppearingText extends Component {
  
    constructor(props){
        super(props);
        this.state={
            visibility: false,
            finalText: this.props.text,
            time: this.props.time
        }
    
       
    }

    startText(){
        if(this.state.visibility){

            this.child.start();
        }
    }

  render() {
    return (
      <VisibilitySensor
        partialVisibility
        delayedCall={true}
        onChange={(isVisible) => {
          this.setState({visibility: isVisible})
            this.startText();
            
        }}
      >
        <AppearingText onRef={ref=>(this.child=ref)}

          text={this.props.text}
          time={this.props.time}

        />
      </VisibilitySensor>
    );
  }
}

export default VisibilitySensorAppearingText;