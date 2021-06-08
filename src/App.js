import {ProjectsHolder,VisibilitySensorAppearingText} from "./components"

function App() {

    

  return (
    <div className="App">
    <div className="mainContentHolder">
        <h1 className="consoleText"> THIS WEBSITE IS A WORK IN PROGRESS. (it is also very bad, tread carefully)</h1>
        <h1 className="consoleText"><VisibilitySensorAppearingText text="Hello! Welcome to my website. I hope you enjoy your time here!" time={5000}/></h1>
        <p className="regularText">My name is Jacob Eckroth. I am currently a senior studying Computer Science with a focus in Simulation and Game Programming
        at Oregon State University (Go Beavs!). I work as the Lead Student Ambassador for the College of Engineering. In my (very little) free time,
        I enjoy reading, working on personal CS projects( this will be linked eventually), playing tennis, gaming, and watching Youtube videos.
     </p>
    <p className="regularText">
        Currently, my main focus is school and successfuly graduating in 3 years in Spring 2022. However, I have recently been fiddling around with 
        some personal projects, as well as making some youtube videos about coding and the projects that I have been working on. 
    </p>

    <p className="regularText">
        Ok, that's definitely enough about me. Here's my resume if you want to look at it, but lets move on to the fun part of this website (and probably the reason that you're here.)
    </p>
    <h1 className="consoleText"><VisibilitySensorAppearingText text="Let's look at some fun projects I've been working on." time={5000}/></h1>
    <ProjectsHolder/>

     </div>

     

  
    </div>
    
  );
}

export default App;
