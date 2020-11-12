// ----------- let and const (variable) -------------------//
// let is block scope

/*
var names = "ahmed";

function foo() {
  names = "arsalan"; // omitting var is create global variable
}

foo();
console.log(names); // arsalan
*/

/*
if (true) {
  var names = "ghous";
}

console.log(names);
*/

/*
if (true) {
  let names = "ghous"; // let sirf is curly bracket ky scope main available hain issy bahar nahi
}

console.log(names); // reference error
*/

/*
let lastName = "ahmed";
let lastName = "basit";

console.log(lastName); // error lastname already has been declared
*/

/*
let lastname = "ahmed";
lastname = "taha";

console.log(lastname); // taha
*/

/*
// const once decalred cannot be change
// let ki tarah const bhi ek bar hi decalre hoga

const pi = 3.14;
console.log(pi);

const school = "SAYLANI";
console.log(school);
*/

// -------------- Template Literals -------------------- //

/*
// old
document.write("2 " + " x " + 1 + " = " + 2 * 1);
document.write("<br>");

// new
document.write(`2 * 1 = ${2 * 1}`);

let firstName = "arsalan";
let lastName = "manzoor";

console.log(`${firstName}. ${lastName}`);
*/

// ------------- Spread Operators ---------------- //
// Spread operator allows an iterable to expand in places where 0+ arguments are expected

/*
let students1 = ["ahmed", "nasir"];
let students2 = ["owais", "bilal", ...students1];

console.log(students1);
console.log(students2);
*/

// ---------------- Rest Parameter --------------- //
// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.

/*
function abc(num1, num2, ...restParams) {
  console.log(num1);
  console.log(num2);
  console.log(restParams);
}

abc("10", "29", "arsalan", true, "bilal", 1, 20);
*/

/*
function f(x, y, z, username, flag) {
  console.log(x, y, z, username, flag);
}

// pass each element of array as argument
f(...[1, 2, 3, "arsalan", true]);
*/

// ------------ Object Destructuring ----------------- //

/*
let student = {
  name: "arsalan",
  school: "saylani",
  rollno: 123,
};

let { name, school } = student;
console.log(name);
console.log(school);

// let say you can use new variable name

let { name: newName } = student;
console.log(newName);
*/

// -------------- Array Destructuring ------------ //

/*
let students = ["abid", "shaka", "bilal", "ahmed"];

let [student1, student2] = students;
console.log(student1);
console.log(student2);
*/

/*
let fruits = ["apple", "orange", "mango", "banana", "oranges", "pineapple"];

let [fruit1, , , fruit2] = fruits; // apple, banana;

console.log(fruit1);
console.log(fruit2);

*/

// ------------------ Ternary Operator -------------------- //
// use the ternary operator for decision making in place of longer if and else conditional statements

/*
let age = 20;

if (age > 30) {
  console.log("30 se bara hai");
} else {
  console.log("30 se chota ha");
}
*/

/*
let age = 20;

var check = age > 30 ? "30 se bara hai" : "30 se chota haiiii";

console.log(check);
*/

// with using OR Operator
/*
let age = 40;

var check = age > 30 || age < 50 ? "30 se bara hai" : "30 se chota haiiii";
console.log(check);
*/

/*
var bool = true;

var name = bool && "arsalan";

console.log(name);
*/

// ------------ Synchronous and Asynchronous Programming ------------- //
// synchronous means line by line

// this hoisting (by default function declaration goes on top of our js file)
/*
testing();

console.log("1");

function testing() {
  console.log("2");
}

testing();

console.log("3");

//  2 1 2 3
*/

// this is asynchronus code
// asynchronus means ap koi bhi cheez jo ap baad main chalny ko kehy rahy hain
// asynchronus browser ki special memory main ja kar register hojayega pehly sata synchronous code chaly ga usky bad async code chaly ga

/*
setTimeout(function () {
  console.log("Number 1");
}, 1000);
console.log("Number 2");
console.log("Number 3");
*/

/*
var myName;

setTimeout(function () {
  myName = "arsalan";
}, 1000);

setTimeout(function () {
  console.log(myName); // arsalan
}, 2000);

console.log(myName); // undefined
*/

// ---- Promises ---- //

// koi aisa kaam jo future main hoga or hamain nahi pata woh kitna time lega tu usky liyeh hum promises use karty hain

// Three states
// Pending, resolve and reject

/*
var promise = new Promise(function (resolve, reject) {
  var zinger = "available";

  if (zinger === "available") {
    resolve("Han bhai zinger aa raha hai rasty main hai");
  } else {
    reject("nahi bhai zinger nahi hai");
  }
});

promise
  .then(function (data) {
    console.log("Resolve = ", data);
  })
  .catch(function (error) {
    console.log("Reject = ", error);
  });
*/

/*
let promise = new Promise(function (resolve, reject) {
  firebase
    .database()
    .ref("user")
    .on("child_data", function (data) {
      if (data.val()) {
        resolve(data.val());
      } else {
        reject("something went wrong");
      }
    });
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

/*
var firstAsync = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var randomNumber = Math.ceil(Math.random() * 100);

    if (randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject("its an odd number");
    }
  }, 1000);
});

console.log("1");

firstAsync
  .then(function (success) {
    console.log("first promise worked fine. ", success);
  })
  .catch(function (error) {
    console.log("error is: ", error);
  });

console.log("2");
*/

// -------------------- Function Expression ------------------------- //

// anonymous function jiska naam nahi hota usko hum kisi variable main save kara dyty hain

/*
let foo = function () {
  console.log("Hello world function expression");
};

foo();
*/

// ------------------- Arrow Function ------------------------------- //

/*
let hello = (name) => {
  console.log(`Hello ${name}`);
};

hello("arsalan");
*/

/*
let hello = () => {
  return "arsalan";
};

console.log(hello());
*/

/*
let hello = (name) => `Hello ${name}`;

let returnValue = hello("ahmed");
console.log(returnValue);
*/

/*
let sum = (num1, num2) => {
  console.log(`${num1} + ${num2} is = ${num1 + num2}`);
};

sum(10, 2);
*/

// agar normal function main this ko tager karen tu woh us function ko target karega

// jab k arrow function apny parent ko target karega

/*
function foo() {
  console.log(this);
}

foo();

let hello = () => {
  console.log(this);
};

hello();
*/

// ------------------------ CallBack function and High order function ------------------- //

// callback function ka matlab hai function as a parameter simple alfaz main

/*
function calculate(num1, num2, callBack) {
  console.log("App started");
  const a = num1;
  const b = num2;
  const c = a + b;
  console.log(c);
  callBack();
}

calculate(4, 5, function () {
  console.log("App closed");
});
*/

/*
let getData = (renderData) => {
  setTimeout(() => {
    renderData("arsalan");
  }, 3000);
};

let renderData = (name) => {
  console.log(name);
};

getData(renderData);
*/

// ------------------- Higher Order Functions of Array --------------------------- //

// 1) Filter

/*
let arr = [
  { name: "arsalan", age: 24 },
  { name: "ghous", age: 30 },
];

let filter = arr.filter((data) => {
  return data.age === 24;
});

console.log(filter);
*/

// ----------------------- Search ------------------------//

// startsWith and endsWith

/*
let name = "arsalan";
let search = "ar";

console.log(name.startsWith(search));

if (name.startsWith(search)) {
  console.log(name);
}
*/

// 2) Map (purani array ko update kar k new array bana deta hai)

/*
let arr = ["apple", "banana", "mangi"];

let newArr = arr.map((data) => data + " pi");

console.log(arr);
console.log(newArr);
*/

// --------------------- Fetch ------------------------------- //

/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("result == ", data))
  .catch((err) => console.log("error == ", err));

*/

// --------- async await alternate of promises -----------------//

/*
async function getData() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let data = await fetchData.json();

  console.log(data);
}

getData();
*/

// ----------------- Classes ------------------------- //

// old method for constructor function

/*
function Student(name, email) {
  this.name = name;
  this.email = email;
}

let student1 = new Student("arsalan", "example@gmail.com");

console.log(student1);
*/

// issi cheez ko ES6 ny update kar k bana diya class

/*
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

let newStudent = new Student("ahmed", "ahmed@gmail.com");

console.log(newStudent);
*/
