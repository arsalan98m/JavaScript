/*
Prototypal Inheritance Model
JavaScript uses prototypal inheritance model.That means that every constructor function/class has a prototype property that is shared by every instance of
the constructor/class. So any properties and methods or prototype can be accessed by every instance. prototype property returns a object.
*/

// Store some properties, methods on a prototype meaning on the constructor instead of creating a new copy each and every time we create an instance.

function Account(name, initialBalance){
  this.name = name;
  this.balance = initialBalance;
 
}

const abid = new Account("abid",200);
const bilal = new Account("bilal",0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit =  function(amount){
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }

console.log(abid);
console.log(abid.bank);

console.log(bilal);
console.log(bilal.deposit(300));
