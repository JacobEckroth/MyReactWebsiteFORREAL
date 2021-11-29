DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS itchio_links;
DROP TABLE IF EXISTS youtube_links;
DROP TABLE IF EXISTS github_links;
DROP TABLE IF EXISTS projects;
/*Creating users table*/

CREATE TABLE projects(
    project_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(2000),
    start_date DATE,
    end_date DATE,
    update_date DATE
);

CREATE TABLE github_links(
    github_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_id INT UNIQUE,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);


CREATE TABLE youtube_links(
    youtube_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_id INT UNIQUE,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);

CREATE TABLE itchio_links(
    itchio_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_id INT UNIQUE,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);

CREATE TABLE images(
    image_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_id INT UNIQUE,
    alt_text VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);



 SELECT P.title, P.start_date, P.end_date,P.update_date, I.alt_text,I.link AS image_link,G.link AS github_link,itch_io.link AS itch_io_link, Y.link AS youtube_link FROM projects AS P 
 INNER JOIN images AS I ON P.project_id = I.project_id LEFT JOIN github_links AS G ON P.project_id = G.project_id LEFT JOIN itchio_links AS itch_io ON P.project_id=itch_io.project_id
 LEFT JOIN youtube_links AS Y ON P.project_id = Y.project_id;


,itch_io.link AS itch_io_link,