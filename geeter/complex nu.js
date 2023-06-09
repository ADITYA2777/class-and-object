class complexNumber{
    #real;
    #imag;
Constructor (r,i) {
  this.#real= r;
  this.#imag = i;
}

display () {
    console.log(this.#real,"+ i",this.#imag);
}

get real () {
    return this.#real
}
get imag () {
    return this.#imag
}
 addcomplexNumber(c) {
  this.#real += c.real;
  this.#imag += c.imag;
 }
}
const c1 = new complexNumber(5,3);
c1.display();
const c2 = new complexNumber(1,2);
c1.addcomplexNumber(c2);
c1.display();

