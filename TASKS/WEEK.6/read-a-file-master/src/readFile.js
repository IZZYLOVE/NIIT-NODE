const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (typeof fileContents !== "string") {
      reject(new Error("Invalid input: fileContents must be a string"));
    } else {
      const names = fileContents.split(",").map((name) => lodash.toUpper(name.trim()));
      resolve(names);
    }
  });
};

// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then((fileContents) => convertToUpperCase(fileContents))
    .then((convertedContents) => {
      cb(null, convertedContents);
    })
    .catch(() => {
      cb("Encountered error while reading file contents..!");
    });
};

module.exports = {
  readAndConvertFileContents,
};
