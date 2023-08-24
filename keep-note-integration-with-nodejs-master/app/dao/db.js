// const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// initializeConnection = () => {
//   /* create a connection object using createConnection function of mysql module*/
//   var connection =  null;

//   return connection;
// }
// module.exports = initializeConnection;

const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const initializeConnection = () => {
  /* create a connection object using createConnection function of mysql module*/
  var connection = mysql.createConnection({
    host: "localhost",
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
  });

  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error.message);
      return;
    }
    console.log("Connected to the database.");
  });

  return connection;
};

module.exports = initializeConnection;
