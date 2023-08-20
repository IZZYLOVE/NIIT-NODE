
//import all the require modules
const fs = require('fs');
const lodash = require('lodash');

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback

const readFileContents = (fileName, cb) => {
  try {
    const fileExists = fs.existsSync(fileName);
    if (!fileExists) {
      cb("Encountered error while reading file contents..!", []);
      return;
    }
    
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.split('\n');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line !== "") {
        // ... parse the line into individual fields ...
        data.push({
          // ... construct the object with the fields ...
        });
      }
    }
    
    cb(null, data);
  } catch (error) {
    cb("Encountered error while reading file contents..!", []);
  }
};


//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  const sortedData = lodash.sortBy(fileContents, item => parseFloat(item.retail_price));
  cb(null, sortedData);
};

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  const filteredData = fileContents.filter(item => item.product_rating !== 'No rating available');
  const sortedData = lodash.sortBy(filteredData, item => -parseFloat(item.product_rating));
  cb(null, sortedData);
};

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  const formattedData = sortedData.map(item => {
    return `${item.pid},${item.product_name},${item.brand},${item.product_url},${item.retail_price},${item.product_rating}`;
  });
  
  try {
    fs.writeFileSync(outputFileName, formattedData.join('\n'), 'utf-8');
    cb(null);
  } catch (error) {
    cb("Encountered error while writing sorted data to file..!");
  }
};





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}