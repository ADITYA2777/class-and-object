// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.


function getPerson(obj) {
    try {
        if (typeof obj !== 'object') {
            throw new Error('Invalid parameter type');
        }

        if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
            throw new Error("Invalid parameter type");
        }
        const name = obj.name;
        const age =  obj.age;
        return (`name:${name} age:${age}`)
    } catch (error) {
        return error.message;
    }
}

// console.log(getPerson(['name','age']));
console.log(getPerson({name:'aditya jain',age:23}));
// const person = { name: 'aditya', age: 23 };
// console.log(getPerson(person));  // Output: "Name: aditya jain", Age: 23"

const invalidObject = 'Invalid object';
// console.log(getPerson(invalidObject));  // Output: "Invalid parameter type"
