// MVP

// Needs
// mySQL2 package - npm i mysql2

// Important: You will be committing a file that contains your database credentials.
// Make sure that your MySQL password is not used for any other personal accounts,
// because it will be visible on GitHub. In upcoming lessons,
//  you will learn how to better secure this password,
//  or you can start researching npm packages now that could help you.

// variables
const inquirer = require("inquirer");
const mysql = require("mysql2");
const something = placeholder;
const somethingsomething = placeholder2;

// connect to db
const db = mysql.createConnection({
  host: "localhost",
  port: 3301,
  // (your) SQL Username,
  user: "root",
  // (your) SQL Password
  password: "",
  database: "employee_db",
});
// double check this
connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected");
});

// need a prompt for user
// choose to view all departments
// I choose to view all roles
// I choose to view all employees
// I choose to add a department
// I choose to add a role
// I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// prompts
const questions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "",
      message: "What would you like to get started on?",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        // This might not be needed
        "Remove an Employee",
        "Update an Employee",
        "I am done for now.",
      ],
    },
  ]);

  // long loop
  function startQuestions() {
    inquirer
      .prompt(questions)
      .then((data) => {
        console.log(data);
        const answers = data;

        if (answers === "View all Departments") {
          showAllDepartments();
        }
        if (answers === "View all Employee Roles") {
          showAllEmployeeRoles();
        }
        if (answers === "View all Employees") {
          showAllEmployees();
        }
        if (answers === "Add a Department") {
          addDepartment();
        }
        if (answers === "Add a Role") {
          addRole();
        }
        if (answers === "Add an Employee") {
          addEmployee();
        }
        if (answers === "Remove an Employee") {
          removeEmployee();
        }
        if (answers === "Update an Employee") {
          updateEmployee();
        }
        if (answers === "I am done for now.") {
          connection.end();
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }
// function for the employees
function showAllDepartments () {
  blah blah;
}


function showAllEmployees () {
  blah blah;
}


function showAllEmployeeRoles () {
  blah blah;
}







  // view all employees in the database
};
// get values
