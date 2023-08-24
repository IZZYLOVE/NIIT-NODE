
//import all the require module
const fs = require("fs");
const _ = require("lodash");

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
 const readFileContents = (fileName, cb) => {
  try {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        cb(err);
        return;
      }
      
      const lines = data.split("\n");
      const headers = lines[0].split(",");

      const fileContents = lines.slice(1).map(line => {
        const values = line.split(",");
        const rowData = {};
        headers.forEach((header, index) => {
          rowData[header] = values[index];
        });
        return rowData;
      });

      cb(null, fileContents);
    });
  } catch (err) {
    cb(err);
  }
};

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback

  // const filterData = (fileContents, cb) => {
  //   let filteredData ;
    
  //   cb(null, filteredData);
  // }

const filterData = (fileContents, cb) => {
  try {
    const filteredData = _.filter(fileContents, { payment_method: "credit" });
    cb(null, filteredData);
  } catch (err) {
    cb(err);
  }
};

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method

  // const writeFilteredDataToFile = (filteredData, cb) => {
  //   try {
  //     //use writeFile method and write the filteredData in output.txt file
    
  //   } catch (err) {}
      
  // }

const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    const outputText = JSON.stringify(filteredData, null, 2);
    fs.writeFile("output.txt", outputText, "utf8", err => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, "Successfully wrote filtered data to output.txt file..!");
    });
  } catch (err) {
    cb(err);
  }
};

module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
