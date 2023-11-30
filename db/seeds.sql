USE eriair_db; 


INSERT INTO department(name)
VALUES("Sales"),
("Enginering"),
("Finance"),
("Legal team");



INSERT INTO role(title, salary, department_id)
VALUES("Sales", 50000, 1),
("Lead Engineer", 80000, 2),
("Account Manager", 70000, 3),
("Lawyer", 10000, 4);



INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("John", "Doe", 1, 1),
("John", "Doe", 2, 2),
("Sam", "Smith", 3, 3),
("Dani", "Ermi", 4, 4);
