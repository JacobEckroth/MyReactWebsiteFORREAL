const poolFile = require('./pool');

function addProject(title,description,startDate,endDate,updateDate){
    return poolFile.pool.query('INSERT INTO projects (title,description,start_date,end_date,update_date) VALUES($1,$2,$3,$4,$5) ON CONFLICT (title) DO UPDATE SET title=$1,description=$2,start_date=$3,end_date=$4,update_date=$5 RETURNING project_id',[title,description,startDate,endDate,updateDate]);
}

function addGithubLink(githubLink,projectId){
    return poolFile.pool.query('INSERT INTO github_links (link,project_id) VALUES($1,$2) ON CONFLICT (project_id) DO UPDATE SET link=$1',[githubLink,projectId]);
}
function addItchIOLink(ItchIOLink,projectId){
    return poolFile.pool.query('INSERT INTO itchio_links (link,project_id) VALUES($1,$2) ON CONFLICT (project_id) DO UPDATE SET link=$1',[ItchIOLink,projectId]);
}
function addYoutubeLink(youtubeLink,projectId){
    return poolFile.pool.query('INSERT INTO youtube_links (link,project_id) VALUES($1,$2) ON CONFLICT (project_id) DO UPDATE SET link=$1',[youtubeLink,projectId]);
}

function addImage(link,altText,projectId){
    return poolFile.pool.query('INSERT INTO images (link,alt_text,project_id) VALUES($1,$2,$3) ON CONFLICT (project_id) DO UPDATE SET link=$1, alt_text=$2, project_id=$3',[link,altText,projectId]);
}
function getAllProjects(){
    return poolFile.pool.query('SELECT P.project_id,P.title, P.description, P.start_date, P.end_date,P.update_date, I.alt_text,I.link AS image_link,G.link AS github_link,itch_io.link AS itch_io_link, Y.link AS youtube_link FROM projects AS P INNER JOIN images AS I ON P.project_id = I.project_id LEFT JOIN github_links AS G ON P.project_id = G.project_id LEFT JOIN itchio_links AS itch_io ON P.project_id=itch_io.project_id LEFT JOIN youtube_links AS Y ON P.project_id = Y.project_id');
}

module.exports = {
    addProject,
    addGithubLink,
    addItchIOLink,
    addYoutubeLink,
    addImage,
    getAllProjects
}