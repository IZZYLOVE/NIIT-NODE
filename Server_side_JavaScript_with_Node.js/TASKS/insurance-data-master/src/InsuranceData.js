//import all the modules require
const fs = require("fs");
const readline = require("readline");
const _ = require("lodash");

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
  try {
    let fileContents = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false
    });

    rl.on("line", (line) => {
      fileContents.push(line);
    });

    rl.on("close", () => {
      cb(null, fileContents);
    });

    rl.on("error", (err) => {
      cb("Error while reading file using readLine", null);
    });
  } catch (error) {
    cb("An error occurred while reading the file.", null);
  }
};

  
//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  try {
    const filteredData = fileContents.filter(line => {
      const data = line.split(",");
      return data[1].trim() === "female" && data[5].trim() === "southwest";
    });

    cb(null, filteredData);
  } catch (error) {
    cb("An error occurred while filtering female candidates.", null);
  }
};
  
//This method will write filtered data in the output file

  const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
    try {
      const dataToWrite = filteredData.join("\n");
      fs.writeFile(outputFileName, dataToWrite, (err) => {
        if (err) {
          cb("Error while writing filtered data to output file.", null);
        } else {
          cb(null, "Filtered data written to the output file.");
        }
      });
    } catch (error) {
      cb("An error occurred while writing data to the output file.", null);
    }
  };

//This method will read the file content using Streams
//create array and push all the data from file to it

const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];
  let isFirstLine = true; // Flag to skip the first line

  const stream = fs.createReadStream(fileName, { encoding: 'utf8' });
  stream.on("data", (data) => {
    const lines = data.split("\n");

    if (isFirstLine) {
      isFirstLine = false;
      lines[0] = ""; // Skip the first line
    }

    // Save the last line as partial if it's incomplete
    const lastLine = lines.pop();

    // Filter out empty lines before pushing
    const nonEmptyLines = lines.filter(line => line.trim() !== "");
    fileContents.push(...nonEmptyLines);

    if (lastLine) {
      lines[0] = lastLine; // Store the last line for the next iteration
    }
  });

  stream.on("end", () => {
    cb(null, fileContents);
  });

  stream.on("error", (err) => {
    cb("Error while reading contents of file using streams", null);
  });
};

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

  const filterDataWithNoChildren = (fileContents, cb) => {
    try {
      const filteredData = _.filter(fileContents, (line) => {
        const fields = line.split(",");
        return parseInt(fields[3].trim()) === 0;
      });
  
      cb(null, filteredData);
    } catch (error) {
      cb(error.message, null);
    }
  };


// module.exports = {
//   readFileContentsLineByLine,
//   filterFemaleCandidates,
//   readFileContentsUsingStream,
//  }


module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
  filterDataWithNoChildren,
  writeFilteredDataToFile
};
