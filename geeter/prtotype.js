const myHero =['thor','spiderman'];
const dcHero= ['batman','superman','flash'];

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getspidermanPower:function(){
        console.log(`spidy Power is :${this.spiderman}`);
    }
}

Object.prototype.aditya = function () {
    console.log(`aditya is persent all of there`);
}
console.log(myHero.aditya());
console.log(heroPower.aditya());

Array.prototype.heyaditya=function () {
   console.log("hey hii");
}
console.log(myHero.heyaditya());
// console.log(heroPower.heyaditya());

//inhertance

const user = {
    name:'mumbai',
    email:'aditaa@gmail.com' 
}

const teacher ={
   makevedio:true
}

const teacsupport ={
    isavalabile:false
}

const taaistant ={
    makeassigment:"javascript",
    fulltime:true,
    // __proto__:

}
   taaistant.__proto__=teacsupport

// console.log(taaistant.teacsupport);


String.prototype.truelength = function () {
    console.log(`ture length is :${this.trim().length}`);
}

"aditya    ".truelength()
"aman    ".truelength()
"akshay       ".truelength()