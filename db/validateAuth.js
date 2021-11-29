const fs = require('fs');
var auth = null

if(fs.existsSync('../auth.json')){
    auth = require('../auth.json');
}
function validateAuth(pass){
    if(auth == null){
        return false;
    }   
    if(pass !== auth.authToken){
      return false;
    }else{
        return true;
    }
}


module.exports = {
    validateAuth
}