// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.


// code is start:

// first we create class and use constructor method 

class car {

     constructor(year,company,model){
        this.year = year;
        this.company = company;
        this.model = model;
     }

     getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`
     }
}
//create instane of the car classs..
const mycar = new car(2023,'Tesal','model3');

// call the getDescription method.
console.log(mycar.getDescription());
