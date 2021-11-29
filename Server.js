const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 80

const addProject = require('./db/addProject');
const getProjects = require('./db/getProjects');

//to run: DATABASE_URL=$(heroku config:get DATABASE_URL -a jacobeckroth) ./node_modules/nodemon/bin/nodemon.js Server.js 


app.use(express.static(path.join(__dirname, "build")))
app.use(express.static("public"));
app.use(express.json());

app.post('/addProject',addProject.addProject);

app.get('/getAllProjects',getProjects.getProjects);


app.get('*', function (req, res) {
    res.status(404).send("I should really create a 404 page shouldn't I...");
})

//connecting to the database as well as starting the app listening.

      
app.listen(port, () => {

console.log(`App listening at http://localhost:${port}`)
})


//useful things:
/*


*/