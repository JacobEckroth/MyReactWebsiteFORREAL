const auth = require('./validateAuth')
const queries = require('./Queries');
const errors = require('./Errors');

const addProject = async (httpRequest,httpResponse)=>{
    var body = httpRequest.body;
    var pass = body.authToken;
    if(!(auth.validateAuth(pass))){
        httpResponse.status(400).send("forbidden");
        return;
    };
    var title = body.title
    var description = body.description
    var startDate = body.startDate //'YYYY-MM-DD'
    var endDate = body.endDate
    var updateDate = body.updateDate;
    var projectId;
    try{
        var res = await queries.addProject(body.title,body.description,body.startDate,body.endDate,body.updateDate);
        projectId = res.rows[0].project_id;
    }catch(err){
        errors.handleServerError("addProject",httpResponse,err);
        return;
    }
    if(body.githubLink){
        try{
            await queries.addGithubLink(body.githubLink,projectId);
        }catch(err){
            errors.handleServerError("addGithubLink",httpResponse,err);
            return;
        }
    }
    if(body.youtubeLink){
        try{
            await queries.addYoutubeLink(body.youtubeLink,projectId);
        }catch(err){
            errors.handleServerError("addYoutubeLink",httpResponse,err);
            return;
        }
    }
    if(body.itchIOLink){
        try{
            await queries.addItchIOLink(body.itchIOLink,projectId);
        }catch(err){
            errors.handleServerError("addItchIOLink",httpResponse,err);
            return;
        }
    } 
    if(body.imageLink){
        try{
            await queries.addImage(body.imageLink,body.imageAlt,projectId);
        }catch(err){
            errors.handleServerError("addImage",httpResponse,err);
            return;
        }
    }
    httpResponse.status(200).send("ok");
   
}


module.exports = {
    addProject
}