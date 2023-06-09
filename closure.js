

let score = 5
function one () {
    let score = 1
    console.log(score);
}
function two() {
    let score =2
    console.log(score);
}
function three(params) {
    console.log(score);
}
// one();
// two();
// three();
// console.log(score);
/// we have notice that function take the access outer scope this is called golbal scope .there are two type of scope in javascript golbal & scope this type scope is know as lexical scope ..

function outerfun() {
let outervar= 'i am the level one'

function innerfun () {
    let innerval='i am level two'
    console.log(outervar);
}
console.log(innerval);
innerfun()
}
// outerfun();
///inner function acces a outer function but outer function could not access inner fuction in simple meaning is if kid take ice cream to grandfather access but if grandfather  want ice cream to kid is not access it is know as lexical scope...


const MyGolbal = 0

function fun () {
    const val1 = 1
    console.log(MyGolbal);

    function inneroffun() {
        const val2 =2 
        console.log(val2,val1,MyGolbal); 

        function innerofinner(){
            const val3 =3
            console.log(val3,val2,val1,MyGolbal);
        }
        innerofinner()
      }
      inneroffun()
}
// fun()


//closure

let  pageCount = 0

const item=[1,2,3,4,5,6]

item.map(function callbak (num){
    pageCount++
    console.log(num);
})
console.log("page count",pageCount);

let errormessage = 'this flile is not find found';

setTimeout(() => {
    console.log(errormessage);
}, 1000);