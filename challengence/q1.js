// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.


function convertToNumber(string) {
    try {
        const number = Number(string)
        if (isNaN(number)) {
            throw new error ('Invalid number')
        }
        return number;
    } catch (error) {
        return 'invalid number';
    }
}

console.log(convertToNumber("1234"));