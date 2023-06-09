// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

const arr = [1,2,3,4,5];
// const checkNumber1 =numberChecker(arr)
// 
function numberChecker(arr) {
    return function(number){
        return arr.includes(number);
    }


}

const checkNumber1 = numberChecker(arr);

console.log(checkNumber1(2)); // Output: true
console.log(checkNumber1(6)); // Output: false


