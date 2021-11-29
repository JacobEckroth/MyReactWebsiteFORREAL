const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 80




app.use(express.static(path.join(__dirname, "build")))
app.use(express.static("public"));



app.get('*', function (req, res) {
    res.status(404).send("I should really create a 404 page shouldn't I...");
})






//connecting to the database as well as starting the app listening.

      
app.listen(port, () => {

console.log(`Example app listening at http://localhost:${port}`)
})


//useful things:
/*


*/