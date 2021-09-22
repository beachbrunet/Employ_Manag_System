-- Outline code
-- Example code
-- CREATE TABLE favorite_books (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   section INT NOT NULL,
--   book_name VARCHAR(30) NOT NULL,
--   in_stock BOOLEAN,
--   quantity INT NOT NULL
-- );
-- -- create 3 tables
-- department
-- id: INT PRIMARY KEY
-- name: VARCHAR(30) to hold department name
-- role
-- id: INT PRIMARY KEY
-- title: VARCHAR(30) to hold role title
-- salary: DECIMAL to hold role salary
-- department_id: INT to hold reference to department role belongs to
-- employee
-- id: INT PRIMARY KEY
-- first_name: VARCHAR(30) to hold employee first name
-- last_name: VARCHAR(30) to hold employee last name
-- role_id: INT to hold reference to employee role
-- manager_id: INT to hold reference to another employee that
--  is the manager of the current employee (null if the employee has no manager)
DROP DATABASE IF EXISTS employee_db;
create DATABASE employee_db;
USE employee_db;
-- need 3 tables roles, employees, department, role, employment
--
--
--
--
CREATE Table department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
--
--
--
--need decminal
CREATE Table role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  department_id VARCHAR(30) NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE
  SET
    NULL
);
--
--
--
--
--
CREATE Table employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id name VARCHAR(30) NOT NULL,
  department INT,
  FOREIGN KEY (role_id) REFERENCES role (id),
  manager_id INTEGER,
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);