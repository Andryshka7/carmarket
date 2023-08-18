CREATE DATABASE carmarket DEFAULT CHARACTER SET utf8;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar VARCHAR(255),
    password VARCHAR(255),
    google_id VARCHAR(255) UNIQUE
);

CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    price INT NOT NULL,
    power VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    transmission VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    user INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(id)
);

CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    car INT NOT NULL,
    FOREIGN KEY (car) REFERENCES cars(id)
);

CREATE TABLE refreshTokens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    token TEXT NOT NULL,
    user INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(id)
);
