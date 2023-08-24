/* Give the config parameters to establish database connectivity*/
// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "1234567890abcdefgh",
//     DB: "niit_note"
//   };

module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || "MyLoVe23@#",
  DB: process.env.DB_NAME || "notesdb",
  PORT: process.env.DB_PORT || 3306,
};