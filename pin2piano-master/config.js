// // Get the config either from environment variables or pick the default
// // The config should contain PORT and MONGO_URL properties
// const config = {

// }

// module.exports = config;

const config = {
    PORT: process.env.PORT || 3000, // Use environment variable or default to 3000
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/shoppingcartDB", // Use environment variable or default URL
  };
  
  module.exports = config;
  