INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Smith',), ('Brad', 'Jones',), ('Ashley', 'Brown',);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Jennifer', 'Buchannon',), ('Brian', 'Hurley',), ('Emily', 'Jackson',);


INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', '100000', 1), ('Sales Manager', '120000', 2), ('Sales Representative', '90000', 2), ('HR Manager', '80000', 3), ('Marketing Manager', '100000', 4), ('Software Engineer', '120000', 5);

INSERT INTO department (name)
VALUES ('Accounting'), ('Sales'), ('HR'), ('Marketing'), ('Engineering');