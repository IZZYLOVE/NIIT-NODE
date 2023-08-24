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

console.log("Checking Connection...");

const initializeConnection = () => {
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
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

    // Now you can perform database operations here

    // When you're done, close the connection
    connection.end((endError) => {
      if (endError) {
        console.error("Error closing the connection:", endError.message);
        return;
      }
      console.log("Connection closed.");
    });
  });
};

// Call the initializeConnection function
initializeConnection();


