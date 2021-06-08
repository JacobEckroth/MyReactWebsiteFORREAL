const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname,"build")))
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('*',function(req,res){
    res.status(404).send("I should really create a 404 page shouldn't I...");
})