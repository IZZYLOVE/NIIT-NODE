//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let vowels = [ 'a','e','i','o','u','y']
  let num = 0
  let str1 = str.split('')
  str1.map((data) => { 
    if(vowels.includes(data)){
      num++
    }
  })
  return num
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return (str.includes(checkStr))
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  //return str.replace(wordToBeReplaced, replaceWord);
  return(str.replaceAll(wordToBeReplaced, replaceWord))
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');    
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  var strSplit = str.split(' ');
  let longestWordlen = 0;
  let longestWord = ''
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordlen){
      longestWordlen = strSplit[i].length;
      longestWord = strSplit[i]
     }
  }
  return longestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}