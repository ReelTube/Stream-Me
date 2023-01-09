CREATE DATABASE IF NOT EXISTS stream_db;

USE stream_db;

DROP TABLE content;
DROP TABLE shows;
DROP TABLE episodes;

CREATE TABLE IF NOT EXISTS content (
	id INT NOT NULL AUTO_INCREMENT,
    type_of_content VARCHAR(10),
    title VARCHAR(255),
    category VARCHAR(100),
    Description TEXT,
    Director TEXT,
    Actors TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS shows (
	id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    title VARCHAR(255),
    Description TEXT,
    season Int,
    number_of_episodes Int,
    FOREIGN KEY(content_id) REFERENCES content(id)
);
    
CREATE TABLE IF NOT EXISTS episodes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    shows_id INT,
    episode_title TEXT,
    description TEXT,
    FOREIGN KEY(shows_id) REFERENCES shows(id)
);
    
    
    