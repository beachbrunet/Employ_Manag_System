-- Outline code
DROP DATABASE IF EXISTS employee_db;
create DATABASE employee_db;
USE employee_db;
-- need 3 tables roles, employees, department, role, employment
CREATE Table roles(
    VARCHAR(30) NOT NULL
);
CREATE Table employees(
    VARCHAR(30) NOT NULL
);
CREATE Table departments(
    VARCHAR(30) NOT NULL
);

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