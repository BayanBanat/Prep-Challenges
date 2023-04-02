'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    // write your code here ...
    let newString="";
    for(let i=string.length-1;i>=0;i--){
        newString+=string[i];

    }
    return newString;

    //or this:
    // return string.split("").reverse().join("");  (^_^)
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let newArr=[];
    for(const word of arr){
        if(word.includes("^_^")){
            newArr.push(word)


        }
       
    }
     return newArr;


    //    or this:
    //  return arr.filter(str=>str.includes("^_^"));   (^_^)
}

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
     let newString="";
   for (let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            newString+=str[i];

        }
    }
    return newString;

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let subArr=arr[i];
        for(let j=0; j<subArr.length; j++){
            let chickeningrediant=subArr[j];
            if(chickeningrediant.includes("chicken")){
                newArr.push([chickeningrediant]);
            }
        }
    }
    return newArr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
