const mongoose = require('mongoose');
const config = require("./config")

function SetupMongooseConnections() {
  // Variable to store the connection object
  let mongooseConn = null;

  /* 
    initializeConn should be a function that calls the connect() function on mongoose
    to establish connectivity with MongoDB using the configurations provided in config.js file

    the connection should handle success and error both with the help of 
    Promise functions `then` and `catch`
  */
  const initializeConn = () => {
    if (!mongooseConn) {
      mongooseConn = mongoose.connect(config.mongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

      mongooseConn.then(() => {
        console.log('Connected to MongoDB');
      }).catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
      });
    }
  };

  /*
    provide handler to handle connected event that fires when connectivity with MongoDB is established
  */
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

  /*
    provide handler to handle error event that fires when there is an error in connecting to MongoDB with Mongoose
  */
  mongoose.connection.on('error', (error) => {
    console.error('Mongoose connection error:', error.message);
  });

  /*
    provide handler to handle disconnected event that fires when the app disconnects from MongoDB
  */
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });

  return { 
    initializeConn,
  };
}

/**
 * Updated the mongoose connection return single connection object. function class behaves as a singleton class
 * The same connection object can be returned for use.
 */
const setupConn = new SetupMongooseConnections();
module.exports = setupConn;
