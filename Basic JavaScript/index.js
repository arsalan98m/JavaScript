// *** alert is a keyword (alert is box that pops up to give the user a message)***

/*
alert("Hello world");

alert(2 + 2);

window.alert("again hello world");
*/

// ***   Console.log() is function that write message on console/terminal

/*
console.log("hello world console");

console.log(2 * 3);

console.log("again hello world console");
*/

// *** For testing purpose you can use document.write to display message or text ***

/*
document.write("hello world ....");
document.write("<br><br>");
document.write(2 * 5);
*/

// *** Variables ***

/*
var age = 45;
var nationality = "Pakistani";
var feePaid = true;

console.log(age);
console.log(nationality);
console.log(feePaid);

var a; // Declaration

a = 67; //Initialization
console.log(a);

a = 70; // updated variable
console.log(a);

*/

// *** Data Types ***

// Six types are considered to be primitives:

// 1) Number -- integers, floats
// 2) String -- an array of characters
// 3) Boolean -- true or false
// 4) Null --  No value
// 5) Undefined -- a declared variable but hasn't been given a value
// 6) Symbol -- a unique value that's not equal to any other

// Two comples types
// 1) Objects
// 2) Functions

// *** Variable for String ***/

/*
var name = "arsalan";
console.log(name);

// updated variable
name = "bilal";
console.log(name);

var message = "It's all right";
console.log(message);
*/

// *** Variable for Numbers ***/

// To store whole numbers or decimal we use number data type

/*
var age = 56;
console.log(age);

var count = 56;
count = 22;
console.log(count);

var sum = 5 + 6;
console.log(sum);

var a = 6;
var b = 9;
var c = a + b;
console.log(c);
*/

// *** Variable for Boolean (to store true/false) use boolean data type***

/*
var isFeePaid = true;
var examPassed = false;

console.log(isFeePaid);
console.log(examPassed);
*/

// *** Undefined ***
// The undefined data type can only have one-value the special-value undefined
// If a variable has been declared, but has not been assigned a value, has the value undefined

/*
var account;
console.log(account);

var name = "arsalan";
name = undefined;

console.log(name);
*/

// *** Null ***

// This is another special data type that can have only one value-the null value.
// A null value means that there is no value
// it is not equialent to an empty string ("") or 0, it is simply nothing.

/*
var password = null;
var nationality = "Pakistani";
nationality = null;

console.log(nationality);
*/

// JavaScript Dynamic Data types
// JavaScript has dynamic type. this means that the same variable can be used to hold
// different data types.
// you can assign any type of value in variable any time and data type of variable will be changed.

/*
var name = "arsalan"; // It' string
console.log(name);

name = 25; // Now changed to Number
console.log(name);

name = true; // Now changed to boolean
console.log(name);
*/

// *** typeof (use typeof operator to find the type of JavaScript variable)
// The type of return the type of a variable or an expression

/*
console.log(typeof "hello");

var a = 45;

console.log(typeof a);

console.log(typeof true);
*/

// *** Statements ***

// A computer program is a list of "instructions" to be "executed" by a computer
// In a programming language these programming instructions are called statements
// A JavaScript program is a list of programming statements
// A statement can set a variable assign to a value
// A statement can also be a function i.e document.write()

/*
var a = 4; // Statement 1
var b = 2; //  Statement 2
var c = 0; //  Statement 3
c = a + b; //  Statement 4
console.log(c); // Statement 5
*/

// *** End of Statement with semicolon ***

// To end statement add semicolon at the end of each executable statement
// Semicolon seperates JavaScript statements

/*
var a = 4;

// When seperated by semicolon, multiple statements on one line are allowed
i = 3;
j = 5;
k = i + j;
*/

// *** Expressions ***

// An expression is a combination of values, variables, function calls and operators
// which computes to a value.
// The combination is called evaluation.

/*
a + b; // expression
4 / 2; // expression
var a = 5;
a * 4; // expression;
"arsalan" + " " + "manzoor"; //expression
*/

// *** Variable Names Legal and Illegal ***

// 1. Variable name can't contain any spaces
// 2. Variable name can contain only letters, numbers, dollars and underscores
// 3. The first character must be dollar underscore, or letter
// 4. Numbers are not allowed as the first character

// Legal Names:

/*
var hello = 56;
var _xyz = 33;
var $work = 12;
var user2 = 11;
var i_info = 99;
var my$work = 1;
*/

// Illegal Names:

// var 2user = 12;          Error can't start with a number
// var my user = 12         Error contain space
// var hello#world = 12;    Error special character not allowed
// var my-info = 12;        Error special character not allowed
// var my?info = 1;         Error special character not allowed
// var my*info = 3;         Error special character not allowed

// *** Comments ***

// Comments are for the human not the machine
// They help you and others understand your code when it comens tome to revise, they make code readable
// You can also use commenting to comment out portions of your code for testing and debugging
// There are two ways to mark text as a comment, single line or multiline

// Declare and Initialize variable

var a = 6; // This is comment

/*
This is multi line
comment 
we will ignore this line
*/

// *** Case Sensitive

/* Variable names are case sensitive
 so rose and Rose are two different vaiables */

var rose = "Hello";
// console.log(Rose); // Error

// *** Arithmetic Operators ***

/*
var a = 6;
var b = 7;

var c = a + b;
console.log(c);

var d = a - b;
console.log(d);

var e = a * b;
console.log(e);

var f = a / b;
console.log(f);

var g = a % b;
console.log(g);

var h = a ** b;
console.log(h);
*/

// *** Eliminating Embiguity

// BODMAS RULE
// Bracket first
// O Order(i.e powers exponents)
// DM (Division Mutliplication)
// AS (Addition Subtraction)

/*
var a = 5 + 2 * 3 - 2 / 2;
// 5 + 2 * 3 -1;
// 5 + 6 - 1;
// 11 - 1 ;
// 10
console.log(a);

console.log(2 ** (3 ** 2));

var a = 5 + (2 * (3 - 2)) / 2;
// 5 + (2*1)/2;
// 5 + 2 / 2;
// 5 + 1
// 6
console.log(a);
*/

// *** Increment and Decrement Operator

// ++ increment operator
// -- decrement operator
// These operators are called prefix and postfix

// Prefix operator first increase/decrease the value in varaible and then assign result to other variable
// Postfix operator first assign the value in other value then increase/decrease value in actual variable

// Prefix Increment Example

/*
var age = 12;
var newAge = ++age;
console.log(age); // 13
console.log(newAge); // 13

// Postfix Increment Example

var age = 12;
var newAge = age++;

console.log(age); // 13
console.log(newAge); // 12

// another Example 1

var a = 4;
var b = 2;
var c = a++ - b; // 4 - 2 = 2
console.log(a); // 5
console.log(b); // 2
console.log(c); // 2

// another Example 2

var a = 4;
var b = 2;
var c = ++a + b; // 5 + 2
console.log(a); // 5
console.log(b); // 2
console.log(c); // 7

// another Example 3

var a = 4;
var b = 3;

var c = a++ + --b - --a; // 4 + 2 - 4

console.log(a); // 4
console.log(b); // 2
console.log(c); // 2
*/

// *** Strings Concatenating ***

/*
// The + operator can also be used for concatenating strings

var firstName = "m.arsalan";
var lastName = "manzoor";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Adding two numbers, will return the sum, but adding a number and a string will return a string.

var a = "6" + 2; // "62"
console.log(typeof a);

var b = 3 + "6"; // "36"
console.log(typeof b);

var c = "Hello " + 2; // "Hello 2"
console.log(c);

var e = "Hello " + 3 + 4; // "Hello 34"
console.log(e);

var f = 3 + 4 + "Hello"; // "7HELLO"
console.log(f);

var g = "Hello" + (3 + 4); //"HELLO 7"
console.log(g);
*/

// *** Prompt ***

/*
var name = prompt("What is your name? ", "arsalan");
console.log(name);

var age = prompt("What is your age?");
var newAge = age + 5;
console.log(newAge);

*/

// *** String Number or Decimal

/*
var age = prompt("What is your age?");
var num = 4;

var sum = parseInt(age) + num;
console.log(sum);
*/

/*
var age = prompt("What is your age?");
var num = 4;

var sum = parseFloat(age) + num;
console.log(sum);
*/

// The Number() function converts the object argument to number that represents the objects value
// If value cannot be converted to a legal number nan is returned

/*
var age = prompt("What is your age");
var num = 4;
var sum = Number(age) + num;
console.log(sum);
*/

// In case of Number() function you don't have to sepearate parseInt or parseFloat function for conversion

/*
var a = Number(true);
console.log(a);

var b = Number(false);
console.log(b);

var c = Number("999");
console.log(c);

var d = Number("999 8888");
console.log(d);

var e = Number("Hello");
console.log(e);
*/

// *** Comparison Operator ***

/* Comparison operators are used in logical statements to determine equality or
   differece between variables or values. They will result in true or false only
*/

/*
var a = 3;

console.log(a == 6);
console.log(a === 6);
console.log(a != 6);
console.log(a !== 6);
console.log(a > 6);
console.log(a < 6);
console.log(a >= 6);
console.log(a <= 3);
*/

// == and === are used for equality check
// == does not consider data type of values being compared and == tries to convert one of the value and compare based on that
// === also check datatype of the values and datatype of value both side

/*
var a = 3;

console.log(a == 3);
console.log(a == "3");
console.log(a == 6);

console.log(a === 3);
console.log(a === "3");
console.log(a === 6);
*/

/*
var a = 5;
var b = 5;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
*/

/*
var a = 5;
var b = "hello";

console.log(a == b);
console.log(a === b);
*/

// *** Logical Operators
/*
Three logical operators
1. && AND 
2. || OR
3. ! NOT
*/

// && AND Opearator
// The logical && operator is used with two or more values(operands), and only evaluates to true if all the
// operadns are true. It will return the false value if at least one value is false

/*
alert(true && true);

alert(false && true);

alert(true && false);

alert(false && false);

*/

/*
var a = 60;

var b = a > 50 && a < 70;
alert(b);

var c = 80;

var d = c > 50 && c < 70;
alert(d);
*/

/*
var a = 5;
var b = 6;

var c = a < b && b < 10 && b > 4;
console.log(c);
*/

// || OR Opearator
// The Logical || OR is also used with two or more values, but it evaluates to true if any of the opearnds
// value are true so only evaluates to false if both operands are false.

/*
alert(true || true);
alert(false || true);
alert(true || false);
alert(false || false);
*/

/*
var a = 60;

var b = a < 50 || a > 70;

console.log(b);

var c = 80;
var d = c < 50 || c > 70;
console.log(d);
*/

/*
var a = 5;
var b = 6;

var c = a < 10 || a > 20;
console.log(c);
*/

// ! LOGICAL NOT Operator
// Using the ! operator in front of a boolean will convert in to opposite value. It means that a true
// value will return false, and false value will return true. This method is known as negation.

/*
console.log(!true);
console.log(!false);
*/

/*
var a = 60;
var b = !(a < 50);
console.log(b);
*/

/*
var c = 80;
var d = !(c > 50);
console.log(d);
*/

/*
var a = 60;

var b = a > 100; //false

var c = !b; // true

var d = !(a > 100); //true

console.log("A = " + a);
console.log("B = " + b);
console.log("C =" + c);
console.log("D=" + d);
*/

/* Using the ! operator in front of a other value will convert it to a boolean and return a opposite value */

/*
console.log(!1); // false
console.log(!0); // true
*/

// Here 1 will will be converted to boolean first and it will be trye and because of ! operator opposite will return
// Same for 0, it will be converted to false and ! will negate it to true

/* Using the !! operator twice in front of a value will convert it to a boolean and negate it twice, useful
   when you want to convert value to boolean
*/

/*
console.log(!!1); //False - True -- True
console.log(!!0); // True - False -- Fasle
*/

/* Here 1 will be converted to boolean first and it will be true and becasue of first
   ! operator it will convert to false and then beacuse of second ! operator it will 
   be converted to true
*/

/*
var a = 0;
var b = !a;
var c = !!a;

console.log(b);
console.log(c);
*/

// *** Wht they are called short-circuit

// && and || operator stops evaluation of expression once they find desired value
// && stop evaluation as soon as it finds false and returns false
// && returns true if all values are true

// || stop evaluation as soon as it find true and returns true
// || return flase if all values are false

// returns false, evaluation stops at first value
var a = false && true && false;

// return false, evaluation stops at last value
var b = true && true && false;

// returns false, evaluation stop at second value
var c = true && false && true;

// returns true, evaluation stop at second value
var d = false || true || false;

// returns true, evaluation stop at first value
var e = true || true || false;

// return true, evaluation stops at last value
var f = false || false || true;

/*
var score = 40;

var a = score > 50 && score < 70 && score == 66;
console.log(a);
*/

// *** Conditions if-else if-else
// Up until now, all the code in our programs has been executed chronologically
// very often when you write you write code, you want to perform different actions for different decisions
// you can use conditional statements in your code to do this.

/*

// If

var age = 12;

if (age > 9) {
  console.log("Age " + age);
  console.log(typeof ("Age" + age));
}
*/

/*
var age = 50;
if (age > 60)
console.log("AGE = " + age);
console.log("Hello age");
*/

// If - else

/*
var age = 15;

if (age > 18) {
  console.log("Qualifies for driving.");
} else {
  console.log("Does not qualify for driving.");
}

*/

// Else if

/*
var score = 80;

if (score > 80) {
  console.log("Grade A");
} else if (score > 70) {
  console.log("Grade B");
} else if (score > 60) {
  console.log("Grade C");
} else {
  console.log("Failed");
}
*/

// *** Nested if ***

// nested if statements means an if statement inside an if statement.

/*
var score = 86;

if (score > 80) {
  console.log("Grade A");
  if (score > 90) {
    console.log("Reward $100.");
  } else if (score > 85) {
    console.log("Reward $50.");
  } else {
    console.log("Reward $20.");
  }
} else {
  console.log("Failed");
}
*/

/*
var score = 71;

if (score > 80 && score <= 100) {
  console.log("Grade A");
} else if (score > 70 && score <= 80) {
  console.log("Grade B");
} else if (score > 60 && score <= 70) {
  console.log("Grade C");
} else {
  console.log("Failed");
}
*/

/*
var input = "O";

if (
  input == "A" ||
  input == "E" ||
  input == "I" ||
  input == "O" ||
  input == "U"
) {
  console.log("It's a Vowel");
} else {
  console.log("It's a consonants");
}
*/

// *** Value Conversion to boolean ***

// In javaScript value or expression can be converted to boolean
// if you apply boolean comparison on values then javascript convert that value into boolean and make comparison
// you can use if/else conditions and they will result in true or false according to values

// Following values will be converted to false and these are falsy values:
/*
1. null
2. NaN
3. 0
4. "" or '' //Empty string single or double quotes
5. undefined
*/

// Following values will be converted to true or truthy values:
/*
1. {}  // Object
2. "Any text"  // String with any text
3. 1 // Any number other than zero

*/

// Number to boolean

/*
var age = 45;
// 45 will be converted to true , if will be executed

if (age) {
  console.log("If Age = " + age);
} else {
  console.log("else block");
}
*/

// null to Boolean

/*
var name1 = null;
// null will be converted to false else will be executed

if (name1) {
  console.log("name = " + name);
} else {
  console.log("this is else block");
}

*/

// String to Boolean

/*
var name = "Hello";
// Hello will be converted to true , if will be executed

if (name) {
  console.log(name);
} else {
  console.log("else block");
}
*/

/*
var empty_string = "";
// it will be converted to false, else will be executed

if (empty_string) {
  console.log(empty_string);
} else {
  console.log("Else block executed");
}

*/

// undefined to Boolean

/*
var undefined_name; // Default value is undefined
// it will be converted to false , else block will be execut

if (undefined_name) {
  console.log("Hello");
} else {
  console.log("else will be execute");
}
*/

// *** Value Conversion to boolean &&

/* Agar logical operator non boolean values par apply karengy tu comparison ky dooran jis value sy result
  false hoga woh value return ho jayegi agar tamam values true hongi  tu last value return hogi yeh && 
  Operator ka rule hai */

// Jab tamam value true hogi tu last value return hojayegi end operator main

var a1 = "Cat" && "Dog"; // true and true return "Dog"

var a2 = false && "Cat"; // false && true return false

var a3 = "Cat" && false; // true && false return false

var a4 = "" && false; // false && false return ''

var a5 = false && ""; // flase and flase return false

var a6 = 0 && 1; // false and true return 0

var a7 = 1 && false; // true and false return false

var a8 = true && {}; // true and true return {}

var a9 = false && {}; // false and true return false

var a10 = "Cat" && 3 == 4; // true and false return false

var a11 = "Cat" && 0; // true and false return 0

var a12 = undefined && "Cat"; // false and true return undefined

// *** Value Conversion to boolean ||

/* Comparison ky dooran koi ek value true hogi tu woh value return hojaygi or agar sari values 
 false hongi tu last value return ho jayegi*/

var a1 = "Cat" || "Dog"; // t || t returns 'Cat'

var a2 = false || "Cat"; // f || t returns 'Cat'

var a3 = "Cat" || false; // t || f returns 'Cat

var a4 = "" || false; // f || f returns false

var a5 = false || ""; // f || f returns " "

var a6 = 0 || 1; // f || t returns 1

var a7 = 1 || false; // t || f returns 1

var a8 = true || {}; // t || t return true

var a9 = false || {}; // f || t return {}

var a10 = "Cat" || 3 == 4; // t || f return 'Cat'

var a11 = "Cat" || 0; // t || f return 'cat'

var a12 = undefined || "Cat"; // f || t return 'Cat'

/*
// && Operator Example
var a = 0;

var b = 8;

var c = a && b;

console.log(c);

// || Operator Example
var d = true && 0 && "Cat";
console.log(d);

var e = true || 0 || "Cat";
console.log(e);

*/

// *** Loops ***

// Looping in programming language is a feature which facilitates the execution of a set of
// instructions/function reoeatdly while some condition evaluates to true.

// The for statement creates a loop that is executed as long as a condition is true

// It will only stop when the condition is false

/*
for (initialization; condition; expression){
  // code to be executed
}

1. Initialization is done(one time) before the execution of the code block
2. codition for executing the code block and exit loop
3. expression is executed(every time) after the code block has been executed.


*/

/*
for (var i = 0; i < 3; i++) {
  console.log(i);
}
*/

/*
for (var i = 5; i <= 8; i++) {
  console.log(i);
}

*/

// *** Infinite loop ***

// All 3 statement in loop are options, in that case it will be infinite looop
// also if you do not provide condition in loop it will make loop infinite

/*
for (;;) {
  console.log("hello");
 }
*/

/*
for (var i = 10; i > 0; i--) {
  console.log(i);
}
*/

// Printing table
/*
table = parseInt(prompt("Enter table your want to print on console: "));
for (var i = 1; i <= 10; i++) {
  console.log(table + " X " + i + " = " + table * i);
}

*/

// *** Break and Continue ***

/*
for (var i = 0; i < 8; i++) {
  if (i == 4) {
    break;
  }
  console.log("I = " + i);
}

*/

/*
for (var i = 0; i < 8; i++) {
  if (i == 4) {
    continue;
  }

  console.log("I = " + i);
}
*/

// *** Nested Loop ***
// If a loop exists inside the body of another loop it's called nested loop

/*
console.log("Before outer");

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("i = " + i + " j = " + j);
  }
}

console.log("After outer");
*/

// *** Arrays ***

// JavaScript arrays are used to store mutiple values in a single variable
// an array is used to store collection of data
// it is an ordered collection which store elements in sequence
// we can use array to store list something like:
// a. students, b.cars, c.food items

// Creating an array using array literal

var food = ["Pizza", "Burger", "Snaks"];

// Creating an array using new Keyword

var foods = new Array("Pizza", "Burger", "Snaks");
// Both are same, first one recommended way to create array

// Array can be created for all datatypes or you can mix them in single array

var arr1 = ["Hello", "World", "Bye"];

var arr2 = [29, 38, 16, 22];

var arr3 = [true, false, true, true];

var arr4 = [23.2, 45.9, 10.2, 9.0];

var arr5 = [{ name: "arsalan" }, { name: "bilal" }];

var arr6 = [75, "Hello", true, { name: "tahir" }];

// Accessing an array element by referring to the index number.
// to access element you provide number in square brackets
// index start from 0

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods);
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// If you create array with 3 elements and try to acces 4th element, it will return undefined
// there will be no error in accessing index that does not exists

console.log(foods[10]); // undefined
console.log(foods[22]); // undefined
*/

// *** Add/Update element using index

// you can use array index to add or update elements in array

// Adding elements
/*
var foods = [];

foods[0] = "Nihari";
foods[1] = "Biryani";
foods[2] = "Pulao";

console.log(foods);
*/

// Updating elements

/*
var foods = ["Pizza", "Burger", "Snaks"];
console.log(foods[1]);

foods[1] = "Sandwich"; // updating existing element
console.log(foods[1]);

foods[3] = "French fries"; // Adding 1 more element

console.log(foods[3]);
console.log(foods);

*/

// Prime Number Example

/*

var num = +prompt("please enter number ");
var isPrime = true;
for (var i = 2; i < num; i++) {
  var result = num % i;
  if (result == 0) {
    console.log("Number is not Prime = " + num + " i=" + i);
    isPrime = false;
    break;
  }
}

if (isPrime == true) {
  console.log(num + " is prime number.");
}

*/

// You can find out number of elements in an array by length property

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods.length); //3

var arr = [];

console.log(arr.length); //0
*/

// Push Function (Add elements to the end of array)

/*
var foods = [];

foods.push("Pizza");
foods.push("Nihari");
foods.push("Biryani");

console.log(foods);
*/

// *** Push Function --- Multiple input ***

/*
var foods = [];

foods.push("Burger");
foods.push("French fries", "biryani");
foods.push("zinger");

console.log(foods);
console.log(foods[1]);
*/

/*
var foods = [];

foods.push(prompt("Enter first foods item"));
foods.push(prompt("Enter second food item"));
foods.push(prompt("Enter third food item"));

console.log(foods);

*/

// *** pop function (pop function remove and return last element from an array) ***

/*
var foods = [];

foods.push("biryani");
foods.push("zinger");
foods.push("snaks");

console.log(foods);
console.log("Length = " + foods.length);

foods.pop();
var a1 = foods.pop();
console.log(a1);

console.log(foods);
console.log("Length = " + foods.length);
*/

// *** shift (shift function will remove and return first element from array) ***

/*
var foods = [];

foods.push("pizza");
foods.push("burger");
foods.push("snaks");

console.log(foods);
console.log("Length = " + foods.length);

foods.shift();
foods.shift();

console.log(foods);
console.log("Length = " + foods.length);

console.log(foods[0]);
*/

// *** unshift (unshift will add elements from starting of array) **

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods);

foods.unshift("Sandwich");

console.log(foods);

foods.unshift("Biryani");

console.log(foods);

console.log(foods[0]);
console.log(foods[1]);

*/

// *** Array with loop ***

/*

var foods = ["Pizza", "Burger", "Snaks"];

for (var i = 0; i < foods.length; i++) {
  console.log(i + " = " + foods[i]);
}

*/

/*

var arr = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2;
  console.log(arr[i]);
}

*/

/*
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = i * 2;
  console.log(arr[i]);
}

*/

// *** Task Search in Array ***

/*
var arr = [44, 12, 1, 10, 9, 8, 22];
var input = parseInt(prompt("Enter number to finds"));
var found = false;

console.log("User input " + input);

for (var i = 0; i < arr.length; i++) {
  if (input === arr[i]) {
    console.log(input + " found on index = " + i);
    found = true;
    break;
  }
}

if (!found) {
  console.log("Not found");
}
*/

// *** Splice function (if we want to add element in middole of array or any index other than first/last then we can use splice)
// splice function can add one or more element on particular index in array
// splice funtion return these value and we can store them other variable and use them

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods); // "Pizza", "Burger", "Snaks"

// this will add 1 element on index 1 and move all elements one index forward

foods.splice(1, 0, "Sandwich"); 
console.log(foods); // "Pizza", "Sandwich", "Burger", "Snaks"
*/

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods); // "Pizza", "Burger", "Snaks"

foods.splice(1, 0, "Sandwich", "Fries"); 

console.log(foods); // "Pizza", "Sandwich", "Fries", "Burger", "Snaks"
*/

/*
var foods = ["Pizza", "Burger", "Snaks"];

console.log(foods); // "Pizza", "Burger", "Snaks"

foods.splice(1, 2, "Sandwich"); // "Pizza", "Sandwich",

console.log(foods); // "Pizza", "Sandwich",
*/

// *** Slice function ***
// to create array from element of existing array you can use slice function
// slice takes start and end index of array to create new array

/*
var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];

console.log(foods); // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"

var arr = foods.slice(1, 3);

console.log(foods); // output same as above

console.log(arr); // "Burger", "Snacks"
*/

/*
var foods = ["Pizza", "Burger", "Snacks", "Sandwich", "Fries"];

console.log(foods); // "Pizza", "Burger", "Snacks", "Sandwich", "Fries"

var arr = foods.slice(2); // Just start index

console.log(arr); // "Snacks", "Sandwich", "Fries"
*/

// *********** Task Triangle ************
/*
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}
*/

/*
for (var i = 1; i <= 5; i++) {
  for (j = 4; j >= i; j--) {
    document.write("&nbsp&nbsp");
  }
  for (var k = 1; k < i * 2; k++) {
    document.write("*");
  }
  document.write("<br>");
}
*/

// *** String ***

// JavaScript strings are used for storing and manipulating text
// string is zero or more characters written inside quotes

/*
var a = "Hello world";

var name1 = "john"; // double quotes
var name2 = "mark"; // single quotes

console.log(a.length);
*/

// *** Escape Chracters ***

/*
var a = "Hello' World"; // single quote
var b = 'Hello" World'; // double quote
var c = "Hello \\ World"; // backslash
var d = "Hello\n World"; //new line
var e = "Hello\t World"; //tab

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
*/

// *** String functions ***

/*
// toLowerCase() function (convert string in lowercase letters)

var food = "sANDWich";

var updatedFood = food.toLowerCase();

console.log(food);
console.log(updatedFood);

// toUpperCase() (convert string in uppercase letters)

var food = "sANDWich";

var updatedFood = food.toUpperCase();

console.log(food);
console.log(updatedFood);

var food = "PIZza";
var input = "pIzza";

if (food.toLowerCase() === input.toLowerCase()) {
  console.log("Match");
} else {
  console.log("Not match");
}
*/

// *** Slice function ***/

// slice() extracts a part of a string and returns the extracted part in a new string
// the method takes 2 parameters: the start position and the end position (end not included)
// string character count starts from 0 as arrays

/*
var a = "Hello world"; // H=0, e=1, l=2, l=3, 0=4

var b = a.slice(6, 9); // return Wor
// 6 to (9 - 1)

// if we omit the second parameter it will return rest of the string

var c = a.slice(6); // return World

// if a parameter is negative, the position is counted from the end of the string

var d = a.slice(-5, -2); // d=-1,l=-2,r=-3,o=-4,w=-5
console.log(d);
*/

// *** indexOF() function

// index of return the index of the first occurrence of a specified text in a string
// if not found -1 is returned

/*
var a = "To be or not to be";
var b = a.indexOf("be"); // return 3

console.log(b);
*/

// Second optional argument in indexOF() specify position to begin search in a string, if not provided it default value is 0

/*
var c = a.indexOf("be", 10); // return 16
console.log(c);
*/

// *** lastIndexOf function
// last index of return the index of the last occurrence of a specified text in a string
// it searched backward from the end to the beginning
// if not found -1 is returned

/*
var a = "To be or not to be";
var b = a.lastIndexOf("be"); // return 16

console.log(b);
*/

// Second optional argument in indexOF() specify position to begin search in a string, if not provided it default value is 0

/*
var c = a.lastIndexOf("be", 10); // return 3
console.log(c);
*/

// *** charAt() function***

// splice() function extract the portion of string provided the starting and ending positions
// charAt() function takes single index input and return character at that index
// returns empty string if index does not exists on negative index provided

/*
var a = "To be or not to be";
var b = a.charAt(7);

console.log(b);
*/

// *** replace() function ***

/*
// the replace() function replaces a specified value with another value in a string
// the replace() function does not change the string it is called on. it returns a new string

var str = "To be or not to be";
var b = str.replace("be", "hello");

console.log(b);

// by default, the replace() function replaces only the first match
// to replace all matches, use a regular expression with a /g flag (global match) and without quotes

var str = "To be or not to be";
var b = str.replace(/be/g, "hello");

console.log(b);

// to replace case insensitive , use a regular expression with an /i flag (insensitive)

var str = "To be or not to be";
var b = str.replace(/to/i, "hello");

console.log(b);

// combine both g and i flag to replace all matches and case insensitive

var str = "To be or not to be";
var b = str.replace(/TO/gi, "hello");

console.log(b);
*/

// *** split() function ***

/*
// the split() function is used to split a string into an array of substrings and returns the new array

var str = "To be or not to be";
var b = str.split(" "); // split with space

//console.log(b);

// split can be done with commas, spaces or any character

var str = "To,be or|not to, be";

var a = str.split(","); // split with commas
var b = str.split(" "); // split with space
var c = str.split("|"); // split on pipe

console.log(a);
console.log(b);
console.log(c);
*/

// *** Math Class ***

// math class provides many functions that allows you to perform mathematical tasks on numbers

// Math.round(x) returns the value of x rounded to its nearest integer

/*
var average = (15 + 23 + 39) / 3; // 25.66
var roundedAverage = Math.round(average); // 26
console.log(average);
console.log(roundedAverage);

console.log(Math.round(4.7));
console.log(Math.round(4.1));
console.log(Math.round(4.5));
console.log(Math.round(-4.1));
console.log(Math.round(-4.7));
console.log(Math.round(5));

// Math.ceil(x) returns the value x rounded up to its nearest integer

console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.1)); // 4
console.log(Math.ceil(-4.7)); // 4

// Math.floor(x) return the value x rounded down to us nearest integer

console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.7)); // -5

// if you want build a game that allow user to guess a number
// Math.random() returns random number between 0 (inclusive) ,and 1 (exclusive)

var num = Math.random();

// if you want to generate random number between some range then you have to add some calculations like

var a = Math.random();
console.log("A = " + a);

var num1 = a * 6;
console.log("Num1 = " + num1);

var num2 = num1 + 1;
console.log("Num2 = " + num2);

var num3 = Math.floor(num2);
console.log("Num3 = " + num3);
*/

// *** controlling the length of decimals ***

/*
//  in arithmetic operation you may face numbers with many decimal place

var average = (15 + 23 + 39) / 3; // 25.6666

// to limit decimal places to specified number you can call toFixed() function on number and round last digit

var avg = average.toFixed(3); // returns 25.667
*/

// *** Date object ***

/*
// it will show complete date with current timezone, if you change the timezone of your computer it will show differnet
var date = new Date();

console.log(date);

// Thre are 4 ways to create  a new date object

// new Date()

// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// new Date(milliseconds);

// new Date(date string)

var date = new Date("2019 7 3");
console.log(date);

var date = new Date("2019/7/3 10:15:20");
console.log(date);

// Retrieving the Date components

var date = new Date("June 14 2019 10:45:25");
console.log(date);

console.log(date.getFullYear()); // 2019
console.log(date.getMonth()); // 5
console.log(date.getDate()); // 14
console.log(date.getDay()); // 5
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 45
console.log(date.getSeconds()); // 25
console.log(date.getMilliseconds()); // 0
console.log(date.getTime());

// where get is used to retrience a specific component from a date, set is used to modify component of a date

var date = new Date("June 14 2019 10:45:25");
console.log(date);

date.setFullYear(2017);
console.log(date);
*/

// *** Converting Day of Week to Text ***

/*
var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var date = new Date("June 14 2019 10:45:25");

var day = date.getDay();

var nameOfDay = dayList[day];

console.log(date);
console.log("Day: " + day);
console.log("Name of Day: " + nameOfDay);
*/

// *** Calculate Time Difference ***

// you can calculate time difference b/w two days using getTime and calculate differnce in days
// getTime returns time in milliseconds so you can find out time differnce in milliseconds by subtracting dates
// then need ind out of milliseconds in a day --- 24 hour * 60 min * 60 sec * 1000 milliseonds
// and divide time difference in milliseonds

/*
var date1 = new Date("July 14 2019 11:12:15");

var date2 = new Date("July 17 2019 11:12:15");

console.log("Date 1:", date1);

console.log("Date 2:", date2);

var timeDiff = date2.getTime() - date1.getTime();

console.log("Time Difference:", timeDiff);

var timeInDay = 24 * 60 * 60 * 1000;
console.log("Time in day:", timeInDay);

var daysDiff = timeDiff / timeInDay;

console.log("daysDiff:" + daysDiff);
*/

// *** Functions *** //

// A function is a block of JavaScript that does the same thing again and again
// A JS function is executed when "something" invokes it (calls it)
// it saves you repetitive coding and makes your code easier to understand
// you can reuse code define the code once and reuse it many times

/*
console.log("Before function");

function showMessage() {
  console.log("Hello world");
}
console.log("After function");

showMessage();
console.log("After function call");
*/

// function can returns data back to caller
// after executing logic in function if you want to return result to the caller of function  then you use return keyword
// when js reaches return statement the function will stop executing and return value back to the caller
// every function in js returns undefined unless otherwise specified

/*
function sum(a, b) {
  console.log(a + b);
}
sum(2, 2);
sum(3, 1);
sum(9);

function calculateScore(sub1, sub2, sub3) {
  return (sub1 + sub2 + sub3) / 3;
}

function findGrade(score) {
  if (score > 80 && score <= 100) {
    console.log("Grade A");
  } else if (score > 70 && score <= 80) {
    console.log("Grade B");
  } else if (score > 60 && score <= 70) {
    console.log("Grade C");
  } else {
    console.log("Grade F");
  }
}

var score1 = calculateScore(80, 60, 80);
console.log(score1);
findGrade(score1);

findGrade(56);
findGrade(81);
findGrade(20);
*/

/*
function multiply(num1, num2) {
  return num1 * num2;
}

function sum(a, b) {
  return multiply(a, b) + b;
}

// var mul = multiply(4, 3);
// var add = sum(multiply(4, 3), 5); // 12 + 5

//console.log("Multiply = " + mul);
//console.log("Sum = " + add);

var add = sum(7, 5);
console.log(add);
*/

// *** Local vs Global Variables *** //

// variable can have local or global scope
// a global var is one that's declared in the main body of your code not inside the function
// a local var is one that's declared inside a function

/*
var a = 7; // global variable

function sum() {
  var b = 6; // local variable
  var c = a + b; // 13, Accessing global
  console.log("C = " + c);
}

sum();

console.log("A = " + a); // 7
*/

/*
var a = 7; // global variable

function sum() {
  var b = 6; // local variable
  a = b + 5;
  console.log("A " + a); // accessing global variable
}

sum();
console.log("A = " + a); // 11, value of a updated
*/

/*
var a = 7; // Global Variable

function sum() {
  var o = 6; // local variable
  a = o + 5;
}

sum();

console.log("O = " + o);
// error, o is not available outside sum function
*/

/*
var a = 7; // global variable

function sum() {
  var a = 6; // Local variable same name as global
  a = 3 + 2; // Local a variable will be affected
  console.log("A = " + a); // 5, access local varaible
}

sum();

console.log("A = " + a); // 7, access global variable
*/

// *** Global Variables without var keyword ***//

// agar variable banaty waqt sath main var keyword na likhen tu woh global var ban jata hai
// or function main bhi hum ny variable banaya or sath main var nahi likha tu woh global var ban jayega

/*
a = 7; // Without var still global variable

function sum() {
  var b = 6; // local variable
  a = b + 5;
  console.log("A = " + a); // Accessing global variable
}

sum();

console.log("A = " + a); // 11, value of a updated
*/

/*
a = 7; // without var still global variable

function sum() {
  b = 6; // global variable because its without var
  a = b + 5;
  console.log("A = " + a); // accessing global variable
}

sum();

console.log("B = " + b);
*/

// *** Function Expressions ***//

// A JS function can also be defined using an expression
// A function can be stored in a variable

/*
var sum = function (a, b) {
  return a + b;
};

var c = sum(4, 5);
console.log(c);

var square = function (num) {
  return num * num;
};

var b = square(4);
console.log(b);
*/

// *** Function Hoisting *** //

// Hoisting is JavaScript's default behaviour of moving declarations to the top of the current scope

// jab hum koi function banaty hai tu javascript usko by default top py ly ata hai isy function hoisting kehty hain
// yani uski declaration line no 0 par chali jati hai
// iska matlab yeh hai k jahan ap ny function likha hai us sy pehly ap function ko call karwadyn tu woh call ho jayega

/*
var total = sum(5, 6); // calling before declaration
console.log("Sum = " + total);

function sum(a, b) {
  return a + b;
}
*/

// jab hum hoisting ki baat karty hain tu declaration top par chaly jati hai initialization nhi
// yeh example kuch aisy hai

/*
var j;

console.log("J = " + j);

j = 6;
*/

/*
console.log("J Before: " + j);

var j = 6;

console.log("J After: " + j);
*/

/*
var mul = multiply(3, 2);
console.log("Mul = " + mul);

var add = sum(4, 6);
console.log("Add = " + add);

var sum = function (a, b) {
  return a + b;
};

function multiply(num1, num2) {
  return num1 * num2;
}
*/

// *** Arguments Passed by Value ***
// primitive data is passed by value the function only gets to know the values not the arguments location
// if a function changes an argument's value it does not change the parameters original value

/*
var num = 5;

function changeValue(a) {
  a = 7; // change to a will not affect num
}

changeValue(num);
console.log(num);

*/

// *** Arguments Passed by Reference  ***
// In JavaScript, object references are values
// Non-primitive value such as array or a user-defined object are passed by reference
// if function changes the object's properties that change is visible outside the function

/*
var arr = [4, 6, 7, 9];

function updateArray(val) {
  // array recieved in val
  val[1] = 57; // updating val will also update arr
}

console.log(arr[1]); // 6 before calling function
updateArray(arr);
console.log(arr[1]);
*/

/*
var obj = { name: "john", age: 56 };

function updateObject(val) {
  // object received in val
  val.age = 40; // updating val will also update obj
}

console.log(obj.age); // 56 before calling function
updateObject(obj);
console.log(obj.age); // 40 after calling function
*/

// *** Recursive function ***//
// A recursive function is a function that calls itself

/*
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 3 * factorial(3-1);
// 2 * factorial(2-1);

console.log(factorial(6));
console.log(factorial(3));
*/

// *** Switch Statenebt *** //

// the switch statement executes a block of code depending on different cases
// the switch statement is a part of javascript's conditional statmenets which are used to perform different actions based on different condition
// switch statment works for equality checks only you can not apply range greater than or less than

// switch case use strict comparison (===)
// the value must be of the same type to match

/*
var a = prompt("please enter character");

switch (a) {
  case "A":
    console.log("A is vowel");
    break;
  case "E":
    console.log("E is vowel");

  case "I":
    console.log("I is vowel");

  case "O":
    console.log("O is vowel");
    break;
  case "U":
    console.log("U is vowel");
    break;
  default:
    console.log("not vowel");
    break;
}
*/

// *** While loop *** //

// The while loop loops through a block of code as long as specified condition is true
// ismy hum control user ky hath main dy dyty hain
// execution is dependent on user input

/*
var i = 0;

while (i < 10) {
  console.log("I = " + i);
  i++;
}
*/

/*
var doContinue = true;

while (doContinue) {
  console.log("Hello");

  var input = prompt("Please enter 'y' to run again or any key to stop");

  if (input.toLowerCase() !== "y") {
    doContinue = false;
  }
}
console.log("After loop");
*/

// ***do-while loop *** //
// this loop will execute the block of code once, before checking if the condition is true

var i = 0;

do {
  console.log("I = " + i);
  i++;
} while (i < 10);
