const auth = require('../auth.json');

function validateAuth(pass){
    if(pass !== auth.authToken){
      return false;
    }else{
        return true;
    }
}


module.exports = {
    validateAuth
}