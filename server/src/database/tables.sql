CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(255),
    year VARCHAR(4),
    price DECIMAL(10, 2),
    power VARCHAR(10),
    type VARCHAR(50),
    transmission VARCHAR(50),
    description TEXT,
    seller INT,
    FOREIGN KEY (seller) REFERENCES users(id)
);


CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    surname VARCHAR(255),
    age INT,
    email VARCHAR(255),
    avatar VARCHAR(255),
    password VARCHAR(255)
);
