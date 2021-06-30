import {ProjectsHolder,VisibilitySensorAppearingText,Footer,ContactHolder} from "./components"

function App() {

    

  return (
    <div className="App">
    <div className="mainContentHolder">
        
        <h1 className="consoleText"><VisibilitySensorAppearingText text="Hello! Welcome to my website. I hope you enjoy your time here!" time={2000}/></h1>
        <p className="regularText">My name is Jacob Eckroth. I am currently a senior studying Computer Science with a focus in Simulation and Game Programming
        at Oregon State University (Go Beavs!). I work as the Lead Student Ambassador for the College of Engineering. In my (very little) free time,
        I enjoy reading, working on personal CS projects, playing tennis, gaming, and watching Youtube videos.
     </p>
    <p className="regularText">
        Currently, my main focus is school and successfuly graduating in 3 years in Spring 2022. However, I have recently been fiddling around with 
        some personal projects, as well as making some <a rel="noreferrer" target="_blank" class="textLink" title="My Youtube Channel" href="https://www.youtube.com/channel/UCaiPyi8kBGzNcYGOtSZbiwg">youtube videos</a> about 
        coding and the projects that I have been working on. 
    </p>
    <p className="regularText">
       I am also currently working on figuring out where I'm going to work once I graduate in June 2022. If you're on this website,
       then there's a chance you're considering offering me a job. That would be great! I would love that. I enjoy working on UI development,
       and by that I mean I love making things that users interact with. That's why so many of my personal projects are games. Being able to
       make things happen when someone presses something on the screen is so awesome to me, and it will always be amazing that I'm able
       to do that.
    </p>

    <p className="regularText">
        Ok, that's definitely enough about me. <a rel="noreferrer" target="_blank" class="textLink" title="My Resume" href="/files/JacobEckrothResume.pdf">Here's my resume</a> if you want to look at it, but lets move on to the fun part of this website (and probably the reason that you're here.)
    </p>
    <h1 className="consoleText"><VisibilitySensorAppearingText text="Let's look at some fun projects I've been working on." time={2000}/></h1>
    <ProjectsHolder/>
    <h1 className="consoleText"><VisibilitySensorAppearingText text="Want to contact me?" time={1000}/></h1>
    <ContactHolder/>
     </div>
    <Footer/>
     

  
    </div>
    
  );
}

export default App;
