function product(n,p,r) {
   this.name = n ;
   this.price = p;
    this.rating = r;
    // return this
}
//1. this keyword in js is diff than other languages
//2. this keyword refer to the context from where we called
//3. in the function constructor
// 3(i) if you use primitive it is ignored  and we return  the object referred this
//3(ii) if you use return a custom obj,then the custom obj is returned
//3(iii)if you this method is returned

const p = new product('iphone',1000000,5);
console.log(p);