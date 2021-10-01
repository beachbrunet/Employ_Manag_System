const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  port: "3301",
  user: "root",
  password: "",
  database: "",
});
modules.exports = connection;
