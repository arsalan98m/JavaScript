// ES6 Classes - Syntatic Sugar
// Prototypal Inheritance
// We don't need to create prototype on es6 class syntax we can create protype methods and properties on outside the constructor


class Account{
  constructor(name, initialBalance){
    // constructor is special methid inside the class that is invoked each and every time we create that instancel
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "CHASE";
  deposit(amount){
    this.balance+= amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const abid = new Account("abid",0);
console.log(abid.name);
abid.deposit(600);
