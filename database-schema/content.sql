CREATE DATABASE IF NOT EXISTS stream_db;

USE stream_db;

DROP TABLE episodes;
DROP TABLE season;
DROP TABLE shows;
DROP TABLE movies;
DROP TABLE content;


CREATE TABLE IF NOT EXISTS content (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type_of_content VARCHAR(10),
    title VARCHAR(255),
    category VARCHAR(100),
    description TEXT,
    director TEXT,
    actors TEXT
);

CREATE TABLE IF NOT EXISTS movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    path TEXT,
    FOREIGN KEY(content_id) REFERENCES content(id)
);

CREATE TABLE IF NOT EXISTS shows (
	id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    FOREIGN KEY(content_id) REFERENCES content(id)
);

CREATE TABLE IF NOT EXISTS season (
	id INT AUTO_INCREMENT PRIMARY KEY,
    shows_id INT,
    number_of_episodes INT,
    FOREIGN KEY(shows_id) REFERENCES shows(id)
);
    
CREATE TABLE IF NOT EXISTS episodes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    season_id INT,
    episode_title TEXT,
    description TEXT,
    path TEXT,
    FOREIGN KEY(season_id) REFERENCES season(id)
);
    
    
    