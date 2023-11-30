DROP DATABASE IF EXISTS eriair_db;
CREATE DATABASE eriair_db;
USE eriair_db; 

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
manager_id INT,
CONSTRAINT fk_employee FOREIGN KEY (manager_id) REFERENCES employee(id)
);








