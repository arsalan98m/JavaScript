// -------------- Chapter 1 (Alerts) ---------------------
// alert is a keyword that displays popup message

/*
alert("Thanks for your input");

alert("This is alert ");

window.alert("This is another output");
*/

// ------------- Chpater 2 (Variable for Strings) ---------------
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

// ---------- Chapter 3 (Variable for Numbers) -----------------

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

// ------------ Chapter 4 (Variable Names Legal and Illegal) ------------

// 1. Can't enclosed variable in quotation marks
// 2. Variable name can't be a number or start with a number
// 3. It can't be any of JavaScript's keyword (the special words that act as programming instruction like alert, and var)
// 4. A variable name can't contain any spaces
// 5. A variable name can contain only letters, numbers , dollar sign and underscores

// --------- Chapter 5 (Math Expressions: Familiar Operators) ---------

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

// ---------- Chapter 6: Math Expression (Unfamiliar Operators) ------------

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

// --------------- Chapter 7 : Math Expressions Eliminating ambiguity ------------

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

// ------------- Chapter 8 : Concatenating text Strings ------------

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

// ------------ Chapter 9 : Prompt -------------
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

// ------  Chapter 10 : if Statements  ----------

/*
var x = prompt("Where does the pop live?");

if (x === "Vatican") {
  alert("Correct");
  alert("Hello world");
}

alert("new alert");
*/

/*
var x = prompt("Where does the pop live?");

if (x === "Karachi") 



	alert("pop live in karachi");
	alert("hello karachi");

 alert("new data");
*/

/*
var x = 56;

if (x === 56) {
  alert("correct data");
}

*/

// ------- Chapter 11 : Comparison operators ----------

/*
var score = 61;

if (score !== 61) {
  alert("you got a B grade");
}

*/

/*
var score = 90;

// greater than
if (score > 90) {
  alert("Congratulations ! you have passed");
}

*/

/*
var score = 90;

if (score < 90) {
  alert("sorry! you're failed");
}

*/

/*
var score = 90;

if (score >= 90) {
  alert("Congratulations! you have passed");
}
*/

/*
var score = 91;

if (score <= 90) {
  alert("sorry! you're failed");
}
*/

/*
var city = prompt("Which city do you live in?");

if (city !== "karachi") {
  alert("sorry wrong answer");
}
*/

/*
var name = "arsalan manzoo";
var firstName = "arsalan";
var lastName = "manzoor";

if (name === "arsalan manzoor") {
  alert("correct 1");
}

if (name == "arsalan" + " manzoor") {
  alert("correct 2");
}

if (name === firstName + " " + lastName) {
  alert("correct 3");
}
*/

/*
var total = 55;

var maths = 30;
var urdu = 25;
var english = 5;

if (total === 55) {
  alert("Correct!");
}

if (total == maths + urdu + english) {
  alert("Correct!!");
}
*/

// ------- Chapter 12 : if...else and else if statements ---------

/*
var score = 95;

if (score < 90) {
  alert("congratulations! you have passed");
} else {
  alert("sorry! you're failed");
}
*/

/*
var score = 75;

if (score > 90) {
  alert("you got an A+");
} else if (score > 80) {
  alert("you got an A");
} else if (score > 70) {
  alert("you got a B");
} else if (score > 60) {
  alert("you got a C");
} else {
  alert("sorry! you are failed");
}

*/

/*
var budget = 15000;

if (budget > 10000) {
  alert("visit turkey");
} else if (budget > 8000) {
  alert("visit spain");
} else if (budget > 7000) {
  alert("visit italy");
} else {
  alert("visit pakistan");
}
*/

// ---------- Chapter 13 : Testing sets of conditions --------------

/*
var a = 4;
var b = "4";

var c = a + b;

alert(c);

if (a == b) {
  alert("correct == ");
}

if (a === b) {
  alert("corect ===");
}
*/

/*
var maths = 35;
var english = 35;
var urdu = 35;

var totalScore = ((maths + english + urdu) / 300) * 100;

var totalScoreToPass = 40;

console.log(totalScore);
console.log(totalScoreToPass);

if (
  maths >= 33 &&
  english >= 33 &&
  urdu >= 33 &&
  totalScore >= totalScoreToPass
) {
  console.log("Congratulations! you have passed");
} else {
  console.log("Sorry! you're failed");
}

*/

/*
var maths = 35;
var english = 35;
var urdu = 35;

var sports = "Cricket";

var totalScore = ((maths + english + urdu) / 300) * 100;

var totalScoreToPass = 40;

console.log(totalScore);
console.log(totalScoreToPass);

if (totalScore >= totalScoreToPass || sports === "football") {
  console.log("You will get an admission");
} else {
  console.log("Sorry no seats available");
}
*/

/*
var age = 67;
var res = "USA";

if (age > 65 || age < 21 && res === "USA") {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}
*/

/*
var age = 63;
var res = "USA";

if (age > 65 || age < 21 && res === "USA") {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}*/

/*
var age = 63;
var res = "US";

if (age > 65 || (age < 21 && res == "USA")) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}
*/

/*
var age = 15;
var res = "USA";

if(age > 65 || age <21 && res === "USA"){
  console.log("you are eligible");

}
else{
  console.log("you are not eligible");
  }
*/

/*
var age = 15;
var res = "US";

if(age > 65 || age < 21 && res === "USA"){
  console.log("you are eligible");

}
else{
  console.log("you are not eligible");
  }

*/

// ------------ Chapter 14 : if statements nested -------------

/*
var score = 61;

if (score >= 90) {
  console.log("Grade A+");
  if (score > 95) {
    console.log("Reward Rs. 10000");
  }
} else if (score >= 80 && score < 90) {
  console.log("Grade A");
  if (score > 85) {
    console.log("Reward Rs. 5000");
  }
} else if (score >= 70 && score < 80) {
  console.log("Grade B");
  if (score > 75) {
    console.log("Reward Rs. 2500");
  }
} else if (score >= 60 && score < 70) {
  console.log("Grade C");
  if (score > 65) {
    console.log("Reward Rs. 1000");
  }
} else {
  console.log("Sorry you are faild :('')");
}
*/

// ------------- Chapter 15 : Arrays ----------------

/*
var cities = ["karachi", "lahore", "multan", "peshawar"];

console.log(typeof cities);
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
console.log(cities[4]);

cities[4] = "hyderabad";

console.log(cities[4]);
var mixedArray = [1, "Bob", "Now is", true];
*/

// ------------- Chapter 16 : Arrays (Adding and removing elements) ----------------

/*
var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

console.log(pets);

pets[3] = "lizard";
pets[6] = "snake";

console.log(pets);

// removing element from the end of array

pets.pop();

console.log(pets);

// adding elements to the end of array

pets.push("fish", "ferret");

console.log(pets);

*/

/*
var temperatures = [];

temperatures[0] = 27;
temperatures[1] = 25;
temperatures[2] = 23;
temperatures[3] = 21;

console.log(temperatures[0]);
console.log(temperatures[1]);
console.log(temperatures[2]);
console.log(temperatures[3]);

temperatures[2] = 30;
console.log(temperatures[2]);

temperatures = [];
console.log(temperatures);
*/

/*
var cities = [];

cities.push("Karachi");
cities.push("Lahore");

var a = cities.pop();
console.log(a);

console.log(cities);
console.log(cities.pop());
console.log(cities);
*/

/*
var cities = [];

cities.push("Karachi");
cities.push("Lahore");
cities.push("Islamabad");

console.log(cities); // karachi, lahore, islamabad

console.log(cities[0]); // karachi

console.log(cities.pop()); // islamabad

console.log(cities); // karachi, lahore
*/

/*
var cities = [];

cities.push("karachi");
cities.push("lahore");

console.log(cities); // "karachi", "lahore"

cities.push("islamabad", "peshawar", "hyderabad");

console.log(cities); // karachi, lahore, islamabad, "peshawar", "hyderabad"
*/

// ------------ Chapter 17 : Arrays (Removing, inserting and extracting elements) ------

// Use the shift method to remove an element from the beginning of an array

/*
var pets = ["dog", "cat", "bird"];
console.log(pets); // "dog", "cat", "bird"

pets.shift();
console.log(pets); // "cat", "bird"

// To add one or more elements to the beginning of an array, use
// the unshift method.

pets.unshift("fish", "ferret");
console.log(pets); // "fish", "ferret", "cat", "bird"

// use the splice method to insert one or more elements anywhere in an array
// the first digit inside parentheses is the index of postion where you want to start
// the second digit is the number of existing elements to remove

pets.splice(2, 2, "pig", "duck", "emu");
console.log(pets); // "fish", "ferret","pig", "duck", "emu"

// you can also remove elements without adding any.

pets.splice(2, 2);
console.log(pets); // "fish", "ferret","emu"

*/

// use the slice method to copy one or more consecutive elements in any position and put
// them into a new array.

/*
var pets = ["dog", "cat", "fly", "bug", "ox", "a", "b"];

// the first digit inside parentheses is the index of the first element to be copied.
// the second difit is the index of the element after the last element to be copied

var noPets = pets.slice(2, 4); 

console.log(noPets); // "fly", "bug"
*/

// Extra Examples

// Shift method

/*
var cities = [];

cities.push("karachi");
cities.push("lahore");
cities.push("islamabad");
cities.push("peshawar");

console.log(cities);

var a = cities.shift();
console.log(a); // karachi

console.log(cities); // lahore, islamabad, peshawar

console.log(cities.shift()); // lahore

console.log(cities); // islamabad, peshawar
*/

// Unshift method

/*
var cities = [];

cities.push("karachi");
cities.push("lahore");

console.log(cities); // karachi, lahore

cities.unshift("islamabad");

console.log(cities); // islamabad, karachi, lahore

console.log(cities[1]); // karachi
*/

/*
var cities = [];

cities.push("karachi");
cities.push("lahore");

console.log(cities); // karachi, lahore

cities.unshift("islamabad", "peshawar");

console.log(cities); // islamabad, peshawar, karachi, lahore

cities.unshift("hyderabad");

console.log(cities); // hyderabad, islambad, peshawar, karachi, lahore
*/

// Add element from 2 index without removing

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(2, 0, "pig", "duck", "emu");

console.log(pets); // "dog", "cat", "pig", "duck", "emu", "fly", "bug", "ox"
*/

// splice, extract

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(2, 1, "pig", "duck", "emu");

console.log(pets); // "dog", "cat", "pig", "duck", "emu", "bug", "ox"
*/

// splice, extract

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(3, 2, "pig", "duck", "emu");

console.log(pets); // "dog", "cat", "fly", "pig", "duck", "emu"
*/

// splice, extract

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(2, 2);

console.log(pets); // dog, cat, ox
*/

// splice, extract
/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(2);

console.log(pets); // "dog", "cat"
*/

// splice, extract

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

pets.splice(2, 2);

console.log(pets); // dog, cat, ox
*/

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

pets.splice(3, 1);

console.log(pets); // dog, cat, fly, ox
*/

// slice, extract

/*
var pets = ["dog", "cat", "fly", "bug", "ox"];

console.log(pets);

console.log(pets.slice(2, 4)); // fly, bug

console.log(pets);
*/

/*
var cities = ["karachi", "lahore", "islamabad", "peshawar", "hyderabad"];

console.log(cities);

var newCities = cities.slice(3, 1);

console.log(newCities);
*/

// ----------- Chapter 18 : for loops ----------------

/*
var cleanestCities = ["karachi", "lahore", "islamabad", "peshawar", "multan"];
var cityToCheck = "multan1";

for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    console.log("It's one of the cleanest city");
  }
}
*/

// condition iteration sy pehly chalta hai
// expression iteration ky baad chalta hai

// initialization; condition ; statement
/*
for( ;  ;  ){

}
*/

/*
for (var a = 0; a < 3; a++) {
  console.log("hello " + a);
}
*/

/*
for (var a = 0; a < 12; a += 4) {
  console.log("hello " + a);
  // hello 0
  // hello 4
  // hello 8
}
*/

/*
var num = 2;

for (var a = 1; a < 11; a++) {
  console.log(num * a);
}
*/

/*
var cities = ["karachi", "lahore", "islamabd", "peshawar", "hyderabad"];

var myCity = prompt("Enter your city");

for (var i = 0; i < 5; i++) {
  if (myCity == cities[i]) {
    console.log("city found.");
  } else {
    console.log("city not found");
  }
}
*/
