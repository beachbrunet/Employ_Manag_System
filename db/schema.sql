-- Outline code
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
CREATE Table department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
--
--need decminal
CREATE Table roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT NOT NULL,
  -- ON DELETE CASCADE (if the department get deleted then the employees get deleted)
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
--
--
CREATE Table employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  manager_id INTEGER,
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);
--