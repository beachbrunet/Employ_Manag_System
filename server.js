// MVP
// Important: You will be committing a file that contains your database credentials.
// Make sure that your MySQL password is not used for any other personal accounts,
// because it will be visible on GitHub. In upcoming lessons,
//  you will learn how to better secure this password,
//  or you can start researching npm packages now that could help you.

// variables
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");

// did a thing here
console.log(`
/$$$$$$$$                         /$$                                              
| $$_____/                        | $$                                              
| $$       /$$$$$$/$$$$   /$$$$$$ | $$  /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$       
| $$$$$   | $$_  $$_  $$ /$$__  $$| $$ /$$__  $$| $$  | $$ /$$__  $$ /$$__  $$      
| $$__/   | $$ \ $$ \ $$| $$  \ $$| $$| $$  \ $$| $$  | $$| $$$$$$$$| $$$$$$$$      
| $$      | $$ | $$ | $$| $$  | $$| $$| $$  | $$| $$  | $$| $$_____/| $$_____/      
| $$$$$$$$| $$ | $$ | $$| $$$$$$$/| $$|  $$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$      
|________/|__/ |__/ |__/| $$____/ |__/ \______/  \____  $$ \_______/ \_______/      
                       | $$                     /$$  | $$                          
                       | $$                    |  $$$$$$/                          
                       |__/                     \______/                           
/$$      /$$                                                                       
| $$$    /$$$                                                                       
| $$$$  /$$$$  /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$            
| $$ $$/$$ $$ |____  $$| $$__  $$ |____  $$ /$$__  $$ /$$__  $$ /$$__  $$           
| $$  $$$| $$  /$$$$$$$| $$  \ $$  /$$$$$$$| $$  \ $$| $$$$$$$$| $$  \__/           
| $$\  $ | $$ /$$__  $$| $$  | $$ /$$__  $$| $$  | $$| $$_____/| $$                 
| $$ \/  | $$|  $$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$                 
|__/     |__/ \_______/|__/  |__/ \_______/ \____  $$ \_______/|__/                 
                                           /$$  \ $$                               
                                          |  $$$$$$/                               
                                           \______/                                
`);

// connect to db via credentials
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // (your) SQL Username,
  user: "root",
  // (your) SQL Password
  password: "Iloveaxle1" /*(make sure to change this) */,
  database: "employee_db",
});
// connect to db
db.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected");
  // this is not the best way but works
  initPrompt();
});

// write prompt
// need a prompt for user
// choose to view all departments
// I choose to view all roles
// I choose to view all employees
// I choose to add a department
// I choose to add a role
// I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee???s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// error thing
// function (error, results) {
//   if (error) throw error;

// prompts
const questions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "value",
      message: "What would you like to get started on?",
      choices: [
        { name: "View all Departments", value: "veiw_deps" },
        { name: "View all Roles", value: "veiw_roles" },
        { name: "View all Employees", value: "veiw_emp" },
        { name: "Add a Department", value: "add_depart" },
        { name: "Add a Role", value: "add_role" },
        { name: "Add an Employee", value: "add_emp" },
        { name: "Remove an Employee", value: "remove_emp" },
        { name: "Update an Employee", value: "update_emp" },
        { name: "I am done", value: "quit" },
      ],
    },
  ]);
};

// loop
function initPrompt() {
  questions().then((data) => {
    console.log(data);
    const answers = data.value;
    // Viewing departments
    if (answers === "veiw_deps") {
      showAllDepartments();
    }
    // Viewing roles
    if (answers === "veiw_roles") {
      showAllEmployeeRoles();
    }
    // Viewing employees
    if (answers === "veiw_emp") {
      showAllEmployees();
    }
    // add depart
    if (answers === "add_depart") {
      addDepartment();
    }
    // add role
    if (answers === "add_role") {
      addRole();
    }
    // add emplo
    if (answers === "add_emp") {
      addEmployee();
    }
    if (answers === "remove_emp") {
      removeEmployee();
    }
    if (answers === "update_emp") {
      updateEmployee();
    }
    if (answers === "I am done for now.") {
      connection.end();
    }
  });
}
// Query database --makes code more dry
function runSelect(sql) {
  db.query(sql, function (err, results) {
    console.table(results);
    initPrompt();
  });
}
// function for viewing Depart
function showAllDepartments() {
  runSelect("select * from department");
}
// function for viewing roles
function showAllEmployeeRoles() {
  runSelect("select * from roles");
}
// function for viewing employees // employee (id, first_name, last_name, role_id, manager_id)
function showAllEmployees() {
  runSelect("select * from employee");
}

//   // // Default response for any other request (Not Found)
//   // app.use((req, res) => {
//   //   res.status(404).end();
//   // });

//   // add Department -- department (id, depart_name)
//   // taking user input this way prevents sequal injection attacks -- (something I learned/ comic of exploits of a mom)
const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "depart_name",
        message: "What is the department you would like to add?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid statement.";
        },
      },
    ])
    .then((answer) => {
      let results = db.execute(
        "insert into department (name) values (?)",
        [answer.depart_name],
        function (error, results) {
          if (error) throw error;
          console.log("Successfully added a department");
          initPrompt();
        }
      );
    });
};
// add Role -- roles table (id, title, salary)
const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the employee's title?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid name.";
        },
      },
      {
        type: "input",
        name: "salary",
        message: "What is the employee's salary?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the employee department ID?",
      },
    ])
    .then((answer) => {
      let results = db.execute(
        "insert into roles (title, salary, department_id) values (?,?,?)",
        [answer.title, answer.salary, answer.department_id],
        function (error, results) {
          if (error) throw error;
          console.table(results);
          console.log("The Employee role has been added!");
          initPrompt();
        }
      );
    });
};
//   // add employee -- employee table (id, first_name, last_name, role_id, manager_id)
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the new employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the new employee's last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the new employee's role id?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the new employee's manager id?",
      },
    ])
    .then((answers) => {
      let results = db.execute(
        "insert into employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)",
        [
          answers.first_name,
          answers.last_name,
          answers.role_id,
          answers.manager_id,
        ],

        function (error, results) {
          if (error) throw error;
          console.table(results);
          console.log("You have added a new employee!");
          initPrompt();
        }
      );
    });
};

//   // Remove an Employee (tried bonus but does not work, same goes for the delete.sql)
const removeEmployee = () => {
  return inquirer
    .prompt({
      type: "input",
      name: "removeEmployeID",
      message: "What is the id of the employee you would like to remove?",
    })
    .then((answers) => {
      let results = db.query(
        "delete from employee WHERE id = ?",
        function (error, results) {
          if (error) throw error;
          console.table(results);
          console.log("Deleted the employee :(");
          initPrompt();
        }
      );
    });
};
// also attempted the bonus here but didnt have time
// // update an employee
// // SQL update code
// // UPDATE users SET email = 'freddy@gmail.com' WHERE id = 2;
// // const updateEmployee = () => {
// //   {
// //     type: "input",
// //     name: "removeEmployeID",
// //     message: "What is the id of the employee you would like to remove?",
// //   },
