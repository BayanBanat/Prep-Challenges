'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
 



    // write your code here
    let lastIndex=str.lastIndexOf(' ');
    if (lastIndex === -1) {
        return str;
      } else {
        return str.slice(lastIndex+1);
      }


}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    let words = str.split(' ');
  return words[words.length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here

    let wordsToReplace = [["I", "We"], ["am", "are"], ["was", "were"]];
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < wordsToReplace.length; j++) {
      if (newStr[i] === wordsToReplace[j][0]) {
        newStr.splice(i, 1, wordsToReplace[j][1]);
      }
    }
  }
  return newStr.join(" ");
  
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if ((i + 1) % 5 === 0 ) {
      result += ',';
    }
    if (i !== arr.length - 1) {
      result += ' ';
    }
  }
  return result;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    let lastResult = '';
    let strSplit = str.split(' ');
  
    for (let i = 0; i < strSplit.length; i++) {
      let firstResult = '';
      let count = 1;
  
      for (let j = 0; j < strSplit[i].length; j++) {
        if (strSplit[i][j] === strSplit[i][j+1]) {
          count++;
        } else {
          firstResult += strSplit[i][j] + count;
          count = 1;
        }
      }
  
      lastResult+= firstResult + ' ';
    }
  
    return lastResult.trim();

}  

// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };