const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rlawnaks12341!@",
  database: "js",
  connectionLimit: 30,
};

const pool = mysql.createPool(config);

module.exports = pool;
