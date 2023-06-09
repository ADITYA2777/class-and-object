

class product{
    //porperites->variables -> data member
    // name ;
    // price;
    // rating;

   constructor(n,p,r){
  console.log("your calling constructor");
   this.name = n;
 this.price = p;
 this.rating = r;

//  return 10; -> if you're using primtive return is avoid!!
//  return { x:0 ,y:0} -> if you're using non primtive then it will be returnrd!!
return this
   }

    
    //behaviours -> fuction -> member function
    display(){
        console.log("current display");
    }
}

const p = new product('aditya',10000000,5);// new ->creates an empty plain object    
//-> in the above peice of code we are calling the constructor method.....
console.log(p);
// p.display()