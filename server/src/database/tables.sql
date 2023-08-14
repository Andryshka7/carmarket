CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(255),
    year INT,
    price INT,
    power VARCHAR(10),
    type VARCHAR(50),
    transmission VARCHAR(50),
    description TEXT,
    seller INT,
    FOREIGN KEY (seller) REFERENCES users(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    car INT,
    FOREIGN KEY (car) REFERENCES cars(id)
);

CREATE TABLE avatars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    user INT,
    FOREIGN KEY (user) REFERENCES users(id)
);
