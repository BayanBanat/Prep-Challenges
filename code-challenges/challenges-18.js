'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let words = str.split(' ');
  let numWords = words.length;
  let middleWord=0;
  if (numWords % 2 === 1) {
    middleWord = (words[Math.floor(numWords / 2)].length);
  } 
  else {
    middleWord = (words[((numWords / 2))]).length;
  }
  return middleWord;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here

    let sum1=0;
    let sum2=0;
    for (let i=0;i<str1.length;i++){
        let string1=str1.charCodeAt(i);
        sum1 +=string1;
    }
    for (let i=0;i<str2.length;i++){
        let string2=str2.charCodeAt(i);
        sum2+=string2;
    }
    return sum1 === sum2;

    ///// or:
    // if (str1.length !== str2.length) {
    //     return false;
    //   }
    //   s1 = s1.split('').sort().join('');
    //   s2 = s2.split('').sort().join('');
    //   return s1 === s2;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let num=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === int){
            
             num= i;
             break;
        }
        else if(arr[i]>int){
            num= i;
            break;
        }
        else{
          num=arr.length;
        }
    }
      return num;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };