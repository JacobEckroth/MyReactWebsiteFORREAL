const queries = require('./Queries');
const errors = require('./Errors');


const getProjects = async (httpRequest,httpResponse)=>{

    try{
        var res = await queries.getAllProjects();
        console.log(res.rows);
        httpResponse.status(200).send(res.rows);
    }catch(err){
        errors.handleServerError("getAllProjects",httpResponse,err)
        return;
    }
   
}



module.exports = {
    getProjects
}