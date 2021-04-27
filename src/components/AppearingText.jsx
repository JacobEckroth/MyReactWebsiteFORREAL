import React from "react";




class AppearingText extends React.Component {

    componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }

    constructor(props){
        super(props);
        this.state={
            currentText: "",
            finalText: this.props.text,
            currentIndex: 0,
            timeBetweenCharacters: this.props.time / this.props.text.length,
            underScore: '',
            blinking:true,
            started:false
        }
        this.start = this.start.bind(this);
        this.addOneCharacter();
        
        
    }
    

    start(){
        if(this.state.started !== true){
            this.setState({
                started:true
            });
            this.blink();
            this.addACharacter();
        }
        
    }

    blink(){
       if(this.state.blinking === false){
            console.log("not blinking");
            return;
        }
        if(this.state.underScore === '_'){
            console.log("removing underscore");
            this.setState({ 
            underScore:''  
            })
        }else{
            console.log("setting underscore");
            this.setState({ 
               underScore:'_'
            })
        }
        if(this.state.blinking === true){
            console.log("setting timeout");
            setTimeout( ()=> {
                this.blink()
            },500);
        }
        
    }

    addACharacter(){
        var pause = false;

        if(this.state.currentText.length === this.state.finalText.length){
            this.setState({
               
                blinking:false,
                underScore:''
                
            })
            
            return;
        }else{
            var currentChar = this.state.finalText[this.state.currentIndex]
            this.state.currentText += currentChar;
            if(currentChar === '.' || currentChar === '!' || currentChar === '?'){
                pause = true;
            }
            this.state.currentIndex +=1;
            this.setState({state:this.state})
        }
        if(!pause){
            setTimeout( ()=> {
                this.addACharacter()
            },this.state.timeBetweenCharacters);
        }else{
            setTimeout( ()=> {
                this.addACharacter()
            },this.state.timeBetweenCharacters*5);
        }
        

    }
    addOneCharacter(){
        var currentChar = this.state.finalText[this.state.currentIndex]
        this.state.currentText += currentChar;

        this.state.currentIndex +=1;
        this.setState({state:this.state})
    }


    render() {
        return (
        <div>
            <p class="typedText">{this.state.currentText} {this.state.underScore}</p>  
        </div>
        );
    }
}

export default AppearingText;
