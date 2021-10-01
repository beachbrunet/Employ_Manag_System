const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  port: "3301",
  user: "root",
  password: "Iloveaxle1",
  database: "employee_db",
});

// extra
connection.connect(function (err) {
  if (err) throw err;
  console.log("You are Connected");
});

modules.exports = connection;
