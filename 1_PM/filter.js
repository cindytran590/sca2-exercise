// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null]

const multOf7 = el => {
  // TODO
  if (typeof el != typeof 42) {
    return false 
  }
  if (el % 7 === 0) {
      return true
    }
  else {
    return false
  }  
//Array.prototype.filter = function(fun) {
// TODO
 };

const newArr = arr.filter(multOf7)

console.log(newArr)
