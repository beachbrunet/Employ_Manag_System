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
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3301,
    // (your) SQL Username,
    user: "root",
    // (your) SQL Password
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Successfully connected");
});
