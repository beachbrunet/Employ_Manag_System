// MVP

// Important: You will be committing a file that contains your database credentials.
// Make sure that your MySQL password is not used for any other personal accounts,
// because it will be visible on GitHub. In upcoming lessons,
//  you will learn how to better secure this password,
//  or you can start researching npm packages now that could help you.

// variables
const inquirer = require("inquirer");
const mysql = require("mysql2");
// const something = placeholder;
// const somethingsomething = placeholder2;

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

// connect to db
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // (your) SQL Username,
  user: "root",
  // (your) SQL Password
  password: "Iloveaxle1" /*(make sure to change this) */,
  database: "employee_db",
});
db.connect((err) => {
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

function startQuestions() {
  inquirer.prompt(
    questions.then((data) => {
      console.log(data);
      const answers = data;

      if (answers === "veiw_deps") {
        showAllDepartments();
      }
      if (answers === "veiw_roles") {
        showAllEmployeeRoles();
      }
      if (answers === "veiw_emp") {
        showAllEmployees();
      }
      if (answers === "add_depart") {
        addDepartment();
      }
      if (answers === "add_roles") {
        addRole();
      }
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
    })
  );
}

// Query database --makes code more dry
function runSelect(sql) {
  db.query(sql, function (err, results) {
    console.table(results);
    startQuestions();
  });
}

function showAllDepartments() {
  runSelect("select * from department"),
    function (error, result) {
      if (error) throw error;
    };
}

// function showAllDepartments() {
//   db.query("select * from department", function (error, result) {
//     if (error) throw error;
//     console.table(res), startQuestions();
//   });
// }

// function for viewing Depart
function showAllDepartments() {
  runSelect("select * from department"),
    function (error, result) {
      if (error) throw error;
    };
}

// function for viewing employees // employee (id, first_name, last_name, role_id, manager_id)
function showAllEmployees() {
  runSelect("select * from employee"),
    function (error, results) {
      if (error) throw error;
      const worker = result.map((employee) => ({
        value: employee.id,
        name: employee.first_name + employee.last_name,
      }));
    };
}

// function for viewing roles // roles (title, salary, department_id)
function showAllEmployeeRoles() {
  runSelect("select * from roles"),
    function (error, result) {
      if (error) throw error;
      const roles = result.map((roles) => ({
        value: roles.id,
        name: roles.title,
      }));
      // pull from employee?
    };

  // add fucntions for
  // Add a Department - need prompt
  // My Departments are: (id, depart_name) Sales, Engineering,Quaility Insurence, Finance, HR
  // function addDepartment() {
  //   runSelect("select * from department"),
  //   function (error, results) {
  //     if (error) throw error;
  //   }
  // };

  // Add an Employee - need prompt

  // Remove an Employee
  // Update an Employee

  // // Default response for any other request (Not Found)
  // app.use((req, res) => {
  //   res.status(404).end();
  // });
}

// add Department -- department (id, depart_name)
const addDepart = () => {
  return inquirer.prompt([
{
  type: "input",
  name: "depart_name",
  message: "What is the department you would like to add?",
  validate: answer => {
    if (answer!==""){
    return true;
     }
      return "please enter a valid name";
    }
  },




// // writing promts
// const addEmployee = () => {
//   return inquirer.prompt([
// {
//   type: "input",
//   name: "first_name",
//   message: "What is the new employee's first name?",
// },
// {
//   type: "input",
//   name: "last_name",
//   message: "What is the new employee's last name?",
// },
// {
//   type: "input",
//   name: "role",
//   message: "What is the new employee's role?",
//   choices:[
//     "Sales",
//     "Engineering",
//     "Quaility Insurence",
//     "Finance",
//     "HR",
// },


// {
//   type: "input",
//   name: "role_id",
//   message: "What is the new employee's manager id?",
//   choices:
//   ]
// };

// // title, salary, department_id
// const addRole = () => {
//   return inquirer.prompt([
//   {
//   type: "input",
//   name: "title",
//   message: "What the role you would like to add?",
//   validate: answer => {
//     if (answer!==""){
//     return true;
//      }
//       return "please enter a valid name";
//     }
//   },
// {
//     type: "input",
//     name: "title",
//     message: "What is the employee's title?",
// },

// {
//   type: "input",
//   name: "salary",
//   message: "What is the employee's salary?",
// },
// {
//   type: "input",
//   name: "department_id",
//   message: "What is the employee department ID?",
// },

// // update employee


// // remove employee










// startQuestions();
