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
  port: 3301,
  // (your) SQL Username,
  user: "root",
  // (your) SQL Password
  password: "Iloveaxle1",
  database: "employee_db",
});
// double check this
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

// add figlet

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

  function startQuestions() {
    inquirer
      .prompt(questions)
      .then((data) => {
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
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  function runSelect(sql) {
    db.query(sql, function (err, results) {
      console.log(results);
    });
  }

  // function for viewing Depart
  function showAllDepartments() {
    runSelect("select * from department");
  }

  // function for viewing employees
  function showAllEmployees() {
    runSelect("select * from employee");
  }

  // function for viewing roles
  function showAllEmployeeRoles() {
    runSelect("select * from roles");
  }

  // add fucntions for
  // Add a Department
  // Add an Employee
  // Remove an Employee
  // Update an Employee
};

// async function SendWelcome(user) {
//   const serverRoom = GetRoom();
//   const normalized_nick = user.nick.replace(/[^\d\w]/, ' ');
//   const message = '```\n'+ await Figlet.textAsync('Hi ' + normalized_nick, {
//     font: 'The Edge'
//   }) + '\n```';

//   user.send(JSONMessage.fromObject({
//     '@': serverRoom.roomName,
//     '!id': genId(),
//     'utc_timestamp': new Date().getTime(),
//     'msg': message
//   }));
// }
