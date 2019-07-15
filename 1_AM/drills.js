const assert = require("assert"); //module being inserted! 


const tokenize = str => {
  const split = str.split(" ") 
return(split)
  // TODO - write a function which converts a multi-word string into an array of words
}; 
console.log(tokenize("Hello world!"))


const reverse = str => {
  const stringSplit = str.split(""); 
  const stringReverse = stringSplit.reverse(); 
  const stringJoin = stringReverse.join("");
  return stringJoin 
  // TODO - write a function which reverses the string
};
console.log(reverse("Hello world!"))


const uniqueOnes = arr => {
  const stringSplit = str.split(" ")

  
  // TODO - write a function which returns the inputted array without duplicate elements
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftTRight("Hello, 2") === "lloHe"
   arr = str.split ("") 
   for (let i = 0; i < num; i++) {
     const l = arr.shift() 
     arr.push(l) 
   }
newStr = arr.join("") 
return newSTr 

};

console.log(shiftRight("Hello, 2"))

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3); //=== means equal and the same data type 
assert([2, 3][0] === 2);
assert(reverse("3df")=== "fd3")
// asssert (reverse("3df") === "fd3")
// assert means "test" 