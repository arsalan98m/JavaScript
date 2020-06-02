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

var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = i * 2;
  console.log(arr[i]);
}
