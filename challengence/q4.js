// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.

class employee {
 
    constructor(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
    }

    getSalary(){
        // return '${name} ${position} ${salary}'
        return this.name,this.position,this.salary
    }
}

const myemployee = new employee('aditya jain','manger',80000);

console.log(myemployee.getSalary());

