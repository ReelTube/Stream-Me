-- Active: 1665410732888@@127.0.0.1@3306@ReelTube_db
USE ReelTube_db;

CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id);
);

CREATE TABLE IF NOT EXISTS videos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    uploaded_address TEXT NULL,
    user_id INT UNSIGNED NOT NULL,
    uploaded_time DATETIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users (id)
);