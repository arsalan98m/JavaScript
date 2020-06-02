// Chapter 1 (Alerts)
// alert is a keyword that displays popup message

/*
alert("Thanks for your input");

alert("This is alert ");

window.alert("This is another output");
*/

// Chpater 2 (Variable for Strings)
// var is a keyword that creates variable

/*
var name = "arsalan";
alert(name);

name = "rehan";
alert(name);

var nationality; // Variable Declaration
alert(nationality);

nationality = "Pakistani"; // Variable Initialization
alert(nationality);

var lessonAuthor = "mark";
var guyWhoKeepsSayingHisOwnName = "mark";

var lastName = "_Smith_";
var cityOfOrigin = "_New Orleans_";
var aussieGreeting = "_g'Day";

var thanx = "Thanks for your input";
alert(thanx);

*/

// Chapter 3 (Variable for Numbers)

/*
var weight = 150;

alert(weight + 25);

var originalNum = 23;
var newNum = originalNum + 7;
alert(newNum);

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;
alert(newNum);

// A variable can be used calculating its own new value

var originalNum = 90;
originalNum = originalNum + 10;
alert(originalNum);

// If enclose a number in quotation marks

var originalNum = "23";
var newNum = originalNum + 7;
alert(newNum);

// you can't begin variable name by number

// var 1stPresident = "Washington";

// you can include numbers in a variable name
var prezWhoCome1st = "Washington";

// if we specify a number instead of a string in alert message or variable that represents alert message
// JavaScript automatically convert it to string and displays it

alert(144);

var caseQty = 144;
alert(caseQty);

*/

// Chapter 4 (Variable Names Legal and Illegal)

// 1. Can't enclosed variable in quotation marks
// 2. Variable name can't be a number or start with a number
// 3. It can't be any of JavaScript's keyword (the special words that act as programming instruction like alert, and var)
// 4. A variable name can't contain any spaces
// 5. A variable name can contain only letters, numbers , dollar sign and underscores

// Chapter 5 (Math Expressions: Familiar Operators)

/*
var popularNumber = 4;

var popularNumber = 2 + 2;

alert(2 + 2);

var popularNumber = 12 - 24;

var popularNumber = 3 * 12;
alert(popularNumber);

var num = 10;
var popularNumber = num + 200;

var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;

// The arithmetic operators I've been using, +, - , *, /

var whatsLeftOver = 10 % 3;

// % is the modulo operator. It gives you the result of dividing one number by another.
// It gives you the remainder when the division is executed.
// If one number divides evenly into another, the modulus operation returns 0.

var whatsLeftOver = 9 % 3;
*/

// Chapter 6: Math Expression (Unfamiliar Operators)

// num++; num = num + 1; (both are same)

// decrement using --

// num--;

// Prefix operator first increase/decrease the value in varaible and then assign result to other variable
// Postfix operator first assign the value in other value then increase/decrease value in actual variable

/*
var num = 1;
var newNum = num++; // Postfix Increment
alert(num);
alert(newNum);
*/

// If we add pluses before the variable , we get different result

/*
var num = 1;
var newNum = ++num; // Prefix Increment
alert(num);
alert(newNum);
*/

/*
var num = 1;
var newNum = num--;  //Postfix Decrement

alert(num);
alert(newNum);
*/

/*
var num = 1; 
var newNum = --num;  // Prefix Decrement
alert(num);
alert(newNum);
*/

// Another Examples
/*
var a = 7;
var b = a + 1;
console.log(a); // 7
console.log(b); // 8

a = a + 1;
console.log(a); // 8

a += 1; // 9
console.log(a);

a++;
console.log(a);

*/
/*
var a = 7;

a++;
console.log(a);

++a;
console.log(a);
*/

/*
var a = 17;
var b = a++;

console.log(a); // 18
console.log(b); // 17
*/

/*
var a = 5;
var b = ++a + a++; // 6 + 6

console.log(a); // 7
console.log(b); // 12
*/

/*
var a = 4;
var b = ++a + --a; // 5 + 4

console.log(a); // 4
console.log(b); // 9
*/

/*
var age = 5;
var herAge = age++;

console.log(age); // 6
console.log(herAge); // 5

*/

/*
var age = 5;
var herAge = ++age;

console.log(age); // 6
console.log(herAge); // 6
*/

// Chapter 7 : Math Expressions Eliminating ambiguity

/*
var totalCost = 1 + 3 * 4;
console.log(totalCost);

var totalCost = (1 + 3) * 4;
console.log(totalCost);

var totalCost = 1 + 3 * 4;
console.log(totalCost);

var resultOfComputation = 2 * 4 * 4 + 2;
console.log(resultOfComputation);
*/

// Chapter 8 : Concatenating text Strings

/*
userName = "arsalan";
alert("Thanks, " + userName + "!");
console.log("Thanks, " + userName + "!");

var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger);

alert("Thanks, " + "rehan" + "!");

var customMessage = message + userName + banger;
alert(customMessage);

alert("2" + "2");
// If you mix strings and numbers javascript automatically convert the numbers to strings

alert("2 plus 2 is equal to " + 2 + 2);
*/

// another Examples
/*
var message = "Thanks, ";
var name = "arsalan";
var banger = "!";

console.log(message + name + banger);

var msg = "Hello 3 World ";
console.log(msg);

var msg1 = "3";
console.log(msg1);

var msg2 = "Hello World " + 3;
console.log(msg2);

var msg3 = "Hello world " + 3 + 3;
console.log(msg3);

var msg4 = "Hello world " + (3 + 3);
console.log(msg4);

var msg5 = 3 + 3 + "Hello world";
console.log(msg5);

var msg6 = "Hello world" + 3 - 3;
console.log(msg6);
*/

// Chapter 9 : Prompt
// In a prompt, you need a way to capture users response
// In a prompt you can specify a second string this is the default response that appears in the field

/*
var spec = prompt("Your species", "human");

var question = "What is your name?";
var defaultAnswer = "arsalan";

var spec = prompt(question, defaultAnswer);
console.log("Thanks, " + spec);
*/

// The user's response is a text string. Even if the response is a number, it comes
// back as a string for example consider this code.

/*
var numberOfCats = prompt("How many cats?");
var ManyCats = numberOfCats + 1;
console.log(ManyCats);

var name = "arsalan";

var name1 = "rehan";

var result = prompt(name);
console.log(result);
*/

// Note: If the user enters nothing and clicks Ok, the variable is assigned an empty string: ""
// If the user clicks cancel, the variable is assigned a special value , 'Null'
// Some coders write window.prompt instead of simply, prompt.

// Chapter 10 : if Statements
