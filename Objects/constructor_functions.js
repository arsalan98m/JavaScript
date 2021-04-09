// Constructor Functions
// new - creates new Object, points to it, omit return

// the common case is use function first letter on capital case this signals that this is specail function

function Person(firstName,lastName){
  this.firstName= firstName,
  this.lastName = lastName,
  this.fullName: function(){
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  }
  console.log(this);
}


const abid = new Person("abid","shah");
console.log(abid);
console.log(abid.fullName);

// console.log(abid.constructor); // it will point back to a function that created  

const a = {};
console.log(a.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function(){};
console.log(sayHi.constructor);

const noman = abid.constructor('noman','ahmed'); // here construcotr was pointing to our person function
console.log(noman.fullName());
