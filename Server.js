const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 80

const authFile = require(path.join(__dirname, "auth.json"));
const mongoUser = authFile.mongoUsername
const mongoPass = authFile.mongoPassword
const MONGO_DB_NAME = "projectsdb"
const mongoURL = "mongodb://" + mongoUser + ":" + mongoPass + "@ec2-35-82-186-88.us-west-2.compute.amazonaws.com/" + MONGO_DB_NAME + "?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;


var mongoDBDatabase;        //you probably don't need this one but its the whole database.
var projectsDB = null;  //this is just the projectsdb collection within the projectsdb database

app.use(express.static(path.join(__dirname, "build")))
app.use(express.static("public"));





app.get('/getAllProjects', function (req, res) {
    var projectCursor = projectsDB.find({}).sort({'dateStarted':1});
    projectCursor.toArray(function (err, projectDocs) {
        
        if (err) {
          res.status(500).send();
        } else {
            res.status(200).send(JSON.stringify(projectDocs));
          
          
        }
      });
})



app.get('*', function (req, res) {
    res.status(404).send("I should really create a 404 page shouldn't I...");
})






//connecting to the database as well as starting the app listening.
try {
    
    MongoClient.connect(mongoURL, function (err, client) {
        if (err) {
            throw err;
        }
        db = mongoDBDatabase = client.db()
        projectsDB = db.collection('projects');
        app.listen(port, () => {

            console.log(`Example app listening at http://localhost:${port}`)
        })


    })

} catch (e) {
    console.error(e);
}

//useful things:
/*


*/