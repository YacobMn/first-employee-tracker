USE eriair_db; 


INSERT INTO department(id, name)
VALUE(1, "Sales"),
(2, "Enginering"),
(3, "Finance"),
(4, "Legal team"),



INSERT INTO roles(id, title, salary, department_id)
VALUE(1, "Sales", 50000, 1),
(2, "Lead Engineer", 80000, 2),
(3, "Account Manager", 70000, 3),
(4, "Lawyer", 10000, 4),



INSERT INTO employee(id, first_name, last_name, role_name, manager_id)
VALUE(1, "John", "Doe", "sales", 1),
(2, "John", "Doe", "Lead Engineer", 2),
(3, "Sam", "Smith", "Account Manager", 3),
(4, "Dani", "Ermi", "Lawyer", 4),
