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
    alert("city found.");
  } else {
    alert("city not found");
  }
}
*/

// ------------ Chapter 19 : for loops (Flags, Booleans, array length, and loopus interrupts) ---------

/*
var cities = ["karachi", "lahore", "islamabd", "peshawar", "hyderabad"];
cityToCheck = prompt("Enter your city");
var matchFound = "no";

for (var i = 0; i < cities.length; i++) {
  if (cityToCheck == cities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities.");
  }
}

if (matchFound === "no") {
  alert("It's not on the list.");
}
*/

// This works, but rather than assigning the strings "no" and "yes" to the switch, it's
// conventional to use the Boolean values false and true.

/*
var cities = ["karachi", "lahore", "islamabd", "peshawar", "hyderabad"];
cityToCheck = prompt("Enter your city");
var matchFound = false;

for (var i = 0; i < cities.length; i++) {
  if (cityToCheck == cities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities.");
  }
}

if (matchFound === false) {
  alert("It's not on the list.");
}
*/

// The next problem with our example is that it potentially wastes computing cycles.
// Suppose on the second loop a match is found and the alert displays. The way the loop is
// coded, the loop goes on looping all the way to the end. This is unnecessary, since we got our
// answer in the second loop. The problem is solved with the keyword break.

/*
var cities = ["karachi", "lahore", "islamabd", "peshawar", "hyderabad"];
cityToCheck = prompt("Enter your city");
var matchFound = false;

for (var i = 0; i < cities.length; i++) {
  if (cityToCheck == cities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities.");
    break;
  }
}

if (matchFound === false) {
  console.log("It's not on the list.");
}
*/

// ---------- Chapter 20 : for loops Nested ----------------

/*
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i + " - " + j);
  }
}
*/

/*
var products = ["shirt", "trouser", "jacket"];
var complimentaryGifts = ["pen", "keychain", "tie"];

for (var i = 0; i < products.length; i++) {
  for (var j = 0; j < complimentaryGifts.length; j++) {
    console.log(products[i] + "--" + complimentaryGifts[j]);
  }
}
*/

/*
var firstNames = ["Blueray", "Upchuck", "Lojack", "Gizmo", "Do-Rag"];

var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

var full_names = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    full_names.push(firstNames[i] + lastNames[j]);
  }
}

for (var k = 0; k < full_names.length; k++) {
  console.log(full_names[k]);
}
*/

// ------------ Extra -------------------------

//    ----- String Interpolation ---------
// In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals

//a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).

//Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.

/*
var myName = "arsalan";
var myCity = "karachi";

console.log(`My name is ${myName}. My favorite city is ${myCity}`);
*/

// -------- Ternary Operator (conditional operator) --------
// bilkul if else ki tarah work karta hai
// condition ya tu true hogi ya false
// isme hum bohta sari statement nahi dal sakty simple ek hi statement dal sakty hain
// agar hamy ek hi statement chahiyeh result main tu hum yeh use karty hain

// syntax: (condition)? True Statement : False Statement

/*
var a = 100;
var b;

a == 100 ? (b = "True") : (b = "False");

console.log(b);
*/

/*
var a = 100;
var b;

b = a == 101   ? "True" : "False";
console.log(b);
*/

/*
var a = 100;
var b;

b = "Value is " + (a > 10 ? "True" : "False");

console.log(b);
*/

// ---------------- Chapter 21 : Changing Case -----------------------

/*
var cleanestCities = [
  "karachi",
  "lahore",
  "multan",
  "hyderabad",
  "islamabad",
  "peshawar",
];

var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
console.log(cityToCheck);

for (var i = 0; i < cleanestCities.length; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the clenest city");
  }
}

*/

/*
var cities = ["Karachi", "Lahore", "Islamabd", "Hyderabad"];

var myCity = "Karachi";
alert(myCity.toUpperCase());
alert(myCity.toLowerCase());

for (var i = 0; i < cities.length; i++) {
  if (cities[i] === myCity) {
    alert("city found");
  }
}
*/

/*
var cities = ["Karachi", "Lahore", "Islamabd", "Hyderabad"];
var myCity = prompt("Enter your city");

for (var i = 0; i < cities.length; i++) {
  if (cities[i].toUpperCase() === myCity.toUpperCase()) {
    alert("city found");
  }
}
*/

/*
var myCity = "kARACHi";
console.log(myCity.toUpperCase());
console.log(myCity.toLowerCase());
*/

// ------------------ Chapter 22 : Strings Measuring length and extracting parts -----------------

var cityToCheck = "karachi";

/*
var firstChar = cityToCheck.slice(0, 1);

var someChars = cityToCheck.slice(2, 5);

console.log(cityToCheck);
console.log(firstChar);
console.log(someChars);

var someChars = cityToCheck.slice(2);
console.log(someChars);
*/

/*
var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;

console.log(cappedCity);
*/

/*
var month = prompt("Enter a month");
var charsInMonth = month.length;

if (charsInMonth > 3) {
  monthAbbrev = month.slice(0, 3);
  console.log(monthAbbrev);
}
*/

// Here's some code that checks for double spaces in a string and displays an alert if they're found.

/*
var str = prompt("Enter some text");
var numChars = str.length;

for (var i = 0; i < numChars; i++) {
  if (str.slice(i, i + 2) == " ") {
    alert("No double spaces!");
    break;
  }
}
*/

/*
var myCity = "karachi";
var newText = myCity.slice(0, 3);
alert(newText); // kar

var newText2 = myCity.slice(2, 6);
alert(newText2); // rach

var newText3 = myCity.slice(2);
alert(newText3); // rachi
*/

/*
var a = "karachi";
var b = a.toUpperCase();
alert(a);
alert(b);
*/

/*
var myCity = "kArAchI";
alert(myCity.length);
*/

// -------------------------- Chapter 23 : finding segments ---------------------------

/*
var text = "The New Yorker magazine doesn't allow the phrase World War II.";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + " the Second World War" + text.slice(i + 12);

    console.log(text);
  }
}
*/

// But JavaScript has a more efficient way to accomplish this, using the indexOf method.

/*
var text = "The New Yorker magazine doesn't allow the phrase World War II.";

var firstChar = text.indexOf("World War II");
console.log(firstChar);

if (firstChar !== -1) {
  text =
    text.slice(0, firstChar) +
    "the Second World War" +
    text.slice(firstChar + 12);
  console.log(text);
}
*/

/*
var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");
console.log(segIndex);
*/

/*
var text = "The quick brown fox jumps over the lazy dog.";

var indexVal1 = text.indexOf("brown");
var indexVal2 = text.indexOf("over");
var indexVal3 = text.indexOf("test");
var indexVal4 = text.indexOf("b");
var indexVal5 = text.indexOf("B");
var indexVal6 = text.indexOf("o");

console.log(indexVal1);
console.log(indexVal2);
console.log(indexVal3);
console.log(indexVal4);
console.log(indexVal5);
console.log(indexVal6);
*/

/*
var text = "The quick brown fox jumps over the lazy dog.";
var firstCharIndex = text.indexOf("brown");

if (firstCharIndex !== -1) {
  var a = text.slice(0, firstCharIndex);
  var b = text.slice(firstCharIndex + 5);

  console.log(a); // The quick
  console.log(b); // fox jumps over the lazy dog
  console.log(text);

  var c = a + "white" + b;
  console.log(c); // The quick white fox jumps over the lazy dog
}
*/

/*
var text = "The quick fox jumps over the brown lazy dog";

var firstCharIndex = text.indexOf("o");
var lastCharIndex = text.lastIndexOf("o");
console.log(firstCharIndex);
console.log(lastCharIndex);
*/

/*
var text = "The quick brown fox jumps over the lazy dog.";

var firstCharIndex = text.indexOf("o", 19); // this mean start searching from 19 index if omit the number searching starts from beginning
console.log(firstCharIndex);
*/

/*
var text = "The quick brown fox jumps over the lazy dog.";
var startIndex = 0;
var counter = 0;

for (var a = 0; a < text.length; a++) {
  var newIndex = text.indexOf("e", startIndex);

  if (newIndex !== -1) {
    counter++;
    startIndex = newIndex + 1;
  }
}

console.log(counter);
console.log(startIndex);
*/

// --------------------- Chapter 24  Strings : Finding a charachter at a location ------------------

/*
var firstName = "arsalan";

var firstChar = firstName.slice(0, 1);

console.log(firstChar);

// Here's an alternate way to do it that's more direct.

var anotherChar = firstName.charAt(0);
console.log(anotherChar);

// The following code finds the last character in the string

var lastChar = firstName.charAt(firstName.length - 1);
console.log(lastChar);
*/

/*
var text = "hello world !";

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === "!") {
    console.log("Exclamation point found!");
    break;
  }
}

// Note the indexOf method can only identify the character at a particular location. It can't change the character at a location
*/

/*
var text = "The quick brown fox jumps over the lazy dog";

console.log(text.charAt(13));
*/

// ---------------- Chapter 25 Strings : Replacing characters ----------------------------

/*
var text = "The New Yorker magazine doesn't allow the phrase World War II.";

var newText = text.replace("World War II", "the Second World War");

console.log(newText);

// In the examples above, only the first instance of a string is replaced. If you want to
// replace all instances, you must let JavaScript know that you want a global replace.

var newText2 = text.replace(/World War II/g, "the second world war");

console.log(newText2);
*/

/*
var text = "The quick brown fox jumps over the lazy dog";

var newText1 = text.replace("brown", "white");

var newText2 = text.replace("over", "white");

console.log(newText1);
console.log(newText2);
*/

/*
var text = "the quick brown fox jumps over the lazy dog";

var newText1 = text.replace("the", "not");
var newText2 = text.replace(/the/g, "not");

console.log(newText1);
console.log(newText2);
*/

// ---------------- Chapter 26 Rounding Numbers ----------------------------

/*
var a = Math.round(3.4);
alert(a);

var b = Math.round(3.5);
alert(b);

var c = Math.round(3.7);
alert(c);

var d = Math.round(-3.7);
alert(d);

var e = Math.round(-3.4);
alert(e);

var f = Math.round(-3.2);
alert(f);
*/

/*
var a = Math.round(0.678437);
alert("A : " + a);

var b = Math.round(0.2678437);
alert("B : " + b);

var c = Math.round(0.6678437);
alert("C : " + c);
*/

/*
var a = Math.floor(3.4);
alert("A : " + a);

var b = Math.floor(3.9);
alert("B : " + b);
*/

/*
var c = Math.ceil(3.4);
alert("C : " + c);

var d = Math.ceil(3.9);
alert("D : " + d);
*/

// -------------------------- Chapter 27 : Generating Random numbers -----------------------

// var randomNumber = Math.random();

// alert(randomNumber);

/*
var a = Math.random();

var b = a * 10;
var c = a * 100;
var d = a * 1000;

console.log("A: " + a);
console.log("B: " + b);
console.log("C: " + c);
console.log("D: " + d);
*/

/*
var bigDecimal = Math.random();
var improvedNum = bigDecimal * 6 + 1;
var numberOfStars = Math.floor(improvedNum);

console.log("Random number 1 to 6: " + numberOfStars);
*/

// ----------------- Chapter 28 : Converting strings to integers and decimals ------------------

/*
var currentAge = prompt("Enter your age");

var yearsEligibleToVote = currentAge - 18;

console.log(yearsEligibleToVote);

var profit = "200" - "150";

console.log(profit);

var profit = "200" - "duck";
console.log(profit);

var result = "200" + 150;
console.log(result);
*/

/*
var currentAge = prompt("Enter current age");
var qualifyAge = parseInt(currentAge) + 1;

console.log(qualifyAge);

var myInteger = parseInt("1.9999");
console.log(myInteger);

var myFractional = parseFloat("1.99999");
console.log(myFractional);
*/

/*
var a = 23;
var b = "23";

var c = b + 5;
var d = a + 5;

console.log(c);
console.log(d);
*/

// Convert strings to integer decimals

/*
var a = "23";
var b = a + 5;

console.log(a);
console.log(b);
*/

// ---------------- Chapter 29 : Converting strings to numbers, numbers to strings ---------------------

/*
// Number( this handy conversion tool converts a string representing either an integer or floating point number)

// The following code converts the string "24" to the number 24.

var integerString = "24";
var num = Number(integerString);
console.log(num);

// The following code converts the string "24.9876" to the number 24.9876.

var floatingNumString = "24.9876";
var num = Number(floatingNumString);
console.log(num);

// Converting a number to a string, perhaps so you can format it, is straightforward.

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
console.log(numberAsString);
*/

/*
var num = 1548;
var newVal = num + 1;

console.log(num);
console.log(newVal);

var numString = num.toString();
console.log(numString.length);
*/

// ----------------------------- Chapter 30 : Controlling the length of decimals ----------------------

/*
var price = 9.5;
var tax = 6.5;
var total = (price * 6.5) / 100;

console.log(total);

var fixedValue = total.toFixed(2);
console.log(fixedValue);
*/

// ---------------------------- Chapter 31: Getting the current date and time --------

/*
var rightNow = new Date();
alert(rightNow);
alert(typeof rightNow);

// if you need date object to be a string you can convert it to one of the same way you convert a number to a strin
var dateString = rightNow.toString();
alert(dateString);
alert(typeof dateString);


var b = rightNow.getDay();
alert(b);
*/

/*
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var rightNow = new Date();

var theDay = rightNow.getDay();
alert(theDay);

alert(days[theDay]);
*/

// ------------------ Chapter 32: Extracting parts of the date and time ---------------
// you can access individual elemts of date object
/*
var rightNow = new Date();
console.log("Date: " + rightNow);

var currentDay = rightNow.getDay();
console.log("Current Date = " + currentDay);

var currentMonth = rightNow.getMonth();
console.log("Current Month = " + currentMonth);

var currentDate = rightNow.getMonth();
console.log("Current Date = " + currentDate);

var currentYear = rightNow.getFullYear();
console.log("Current Year = " + currentYear);

var currentHour = rightNow.getHours();
console.log("Current Hour = " + currentHour);

var currentMinute = rightNow.getMinutes();
console.log("Current minute = " + currentMinute);

var currentSecond = rightNow.getSeconds();
console.log("Current second = " + currentSecond);

var currentMills = rightNow.getMilliseconds();
console.log("Current milliseconds = " + currentMills);

var currentTime = rightNow.getTime();
console.log("Current time on milli seconds = " + currentTime);
*/

/*
var age = 2;

var ageInDays = age * 365;
console.log(ageInDays);

var ageInHours = age * 365 * 24;
console.log(ageInHours);

var ageInMinutes = age * 365 * 24 * 60;
console.log(ageInMinutes);

var ageInSeconds = age * 365 * 24 * 60 * 60;
console.log(ageInSeconds);

var ageInMills = age * 365 * 24 * 60 * 60 * 1000;
console.log(ageInMills);
*/

// -------------------------- Chapter 33 : Specifying a date and time --------------

/*
var dob = new Date("Dec 26, 1991");
console.log("Date of birth: " + dob);

var dobMili = dob.getTime();
console.log(dobMili); // milli seconds from 1970 to 1991

var today = new Date();
console.log(today);

var todayMili = today.getTime();
console.log(todayMili); // milli second from 1970 to 2020

var diff = todayMili - dobMili;
console.log("Difference: " + diff);

var convertYear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
console.log(convertYear);

var accurateAge = Math.floor(convertYear);
console.log("Age = " + accurateAge);
*/

// ------------------------------ Chapter 34 : Changing elements of a date time --------------

// you can change individual elemts of date object

/*
var d = new Date();
console.log(d);

// set the year of an existing date object without changing any other element
d.setFullYear(2001);
console.log(d);

d.setMonth(11);
console.log(d);

d.setDate(1);
console.log(d);
*/

// --------------------------- Chapter 35: Functions ---------------------

/*
A function is a block of JavaScript that robotically does the same thing again and again,
whenever you invoke its name. It saves you repetitive coding and makes your code easier to
understand.
*/

/*
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);
*/

/*
// this is function declaration

function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  alert("time: " + theHr + ":" + theMin);
}

// this is function invoking
tellTime();
tellTime();
*/

/*
// keyword -- functio
// function name --- any legal name as variable name
// parenthesis
// curly brackets

function hello() {
  alert("hello world");
}

hello();
*/

/*
function calculationValue() {
  var a = 6;
  var b = 7;
  var c = a + b;
  alert(c);
}

calculationValue();
calculationValue();
*/

/*
var calc = function () {
  var a = 5;
  alert(a);
};

calc();

var calc2 = function () {
  var a = 10;
  alert(a);
};

calc2();
*/

// ----------------- Chapter 36 : Functions passing them data -------------------

function greerUser() {
  alert("Hello, there");
}

/*
Now, instead of just calling the function, you're calling it and passing data to it. The
string inside the parentheses, i.e. the data you're passing, is called an argument.*/

// A variable inside the parentheses in a function statement is known as a parameter.

// You don't have to declare a variable when it's used as a parameter in a function
// definition. When it's used as a parameter, the declaration is implicit.

/*
function greetUser(greeting) {
  alert(greeting);
}

greetUser("Hello, there.");

var whatever = "hello";

greetUser(whatever);
*/

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + b;
  alert(c);
}

add_value(1, 2);
add_value(3, 1);
add_value(4, 4);
*/

/*
function showMessage(m, string, num) {
  alert(m + string + num);
}

var month = "March";
showMessage(month, "'s winner number is ", 23);
*/

/*
function cafePiyala(typeOfTea) {
  alert("Making " + typeOfTea);
  alert("Tea is ready");
}

cafePiyala("Kashmiri Tea");
cafePiyala("Green Tea");
cafePiyala("Elaichi Tea");
cafePiyala("Leamon Grass Tea");
*/

// ----------------------- Chapter 37 : Passing data back from them -----------

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + b;
  return c;
}

var d = add_value(3, 5);

d = d + 5;

alert(d);

var e = add_value(7, 2);
e = e + 3;
alert(e);
*/

/*
function judgeMarathon() {
  alert("Reviewing application");
  alert("A+");
  return "A+";
}

var result = judgeMarathon();

if (result === "A+") {
  alert("Reward Rs.25000");
} else if (result === "A") {
  alert("Reward Rs.20000");
} else if (resilt === "B") {
  alert("Reward Rs 10000");
} else {
  alert("No reward");
}
*/

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + b;
  return c;
}

//1
add_value(6, 7);

//2

var d = add_value(3, 5);
alert(d);

//3
alert(add_value(4, 5));

//4
var e = 23;
var f = e + add_value(5, 7);
alert(f);
*/

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + b;
  return c;
}

function multiply(multiple, value) {
  return value * multiple;
}

var d = add_value(3, 5); // 8
var e = multiply(2, 5); // 10
var f = multiply(2, d); // 2, 8 ---  16
var g = multiply(2, add_value(2, 5)); // 2 , 7 --- 14
alert(g);

var i = multiply(2, add_value(7, 2)); // 2, 9 -- 18

alert(i);
*/

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + b;
  return c;
}

function multiply(multiple, value) {
  return multiple * add_value(3, value); // 2, (3,6)=9 -- 18
}

var d = multiply(2, 6);
alert(d);
*/

/*
function add_value(first, second) {
  var a = first;
  var b = second;
  var c = a + multiply(2, b); // 3 + (2,6 == 12) = 15
  return c;
}

function multiply(multiple, value) {
  return multiple * value;
}

var d = add_value(3, 6);
alert(d);
*/

/*
function add_value(one, two, three) {
  return one - sum(two, three); // 4 - (6,2 = 8) = -4
}

function sum(a, b) {
  return a + b;
}

var d = add_value(4, 6, 2);
alert(d);
*/

// ----------------- Chapter 38 : Functions Local vs Global variables -------------

// A global variable is one that's declared in the main body of your code—that is, not inside a function.

/*
A local variable is one that's declared inside a function. It can be either a parameter of
the function, which is declared implicitly by being named as a parameter, or a variable
declared explicitly in the function with the var keyword.
*/

/*
var a = 5; // global variable

function add_value() {
  var b = 5; // local variable
  var c = a + b;
  alert(c);
}

add_value();
alert(a);
*/

/*
var a = 5; // global varaible

function add_value() {
  var b = 5; // local variable
  var c = 7;
  a = b + c; // updating global variable
}

alert(a);
add_value();
alert(a);
*/

/*
function add_value() {
  var a = 5; // local variable
  var b = 5;
  var c = 7;
  a = b + c;
  alert(a);
}

//alert(a); // error a is defined inside the function
add_value();
alert(a);
*/

/*
b = 6;

function add_value() {
  a = 5;
  var c = 7;
  alert(a);
  alert(c);
}

add_value();

alert(b);
alert(a);
*/

/*
var a = 6;

function add_value() {
  var a = 5;
  alert(a);
}

add_value();
alert(a);
*/

// ----------------- Chapter 39 - 40: Switch Statement --------------------------

var section = "B";
/*
// if


if (section === "A") {
  alert("Class Time: 11am");
} else if (section === "B") {
  alert("Class Time: 1am");
} else {
  alert("No class");
}
*/

// switch

/*
switch (section) {
  case "A":
  case "B":
    alert("Class Time: 1pm");

  case "C":
    alert("Class Time: 3pm");
    break;
  default:
    alert("No class");
}
*/

// ---------------------- Chapter 41 : while loops --------------------

// while loop (main control user ky hath main hota hain hamain nhi pata loop kab tak chaly ga tu hum control user ky hath main dy dyty hain)

/*
var i = 0;

while (i <= 3) {
  alert(i);
  i++;
}
*/

/*
var doContinue = true;

while (doContinue) {
  alert("HELLO WORLD");
  var userInput = prompt(
    "Do you want to continue? Please press Y for Yes on any key for No"
  );
  alert(userInput);

  if (userInput.toLowerCase() !== "y") {
    doContinue = false;
  }
}
*/

// ----------------- Chapter 42 : do..while loops ---------------------
// it always executes that code at least once, no matter what the looplimiter says.
// condition true ho ya na ho at least ek bar tu loop lazmi chalyga yeh differece while or do-while main

/*
var i = 0;

do {
  alert(i);
  i++;
} while (i <= 3);
*/

var i = 0;

while (i < 0) {
  alert(i);
  i++;
}
// The code says to keep running an alert as long as the counter is less than 0. But since the
// counter is never less than 0, the code inside the curly brackets never executes.

//Compare this with the do...while loop.

var i = 0;

do {
  alert(i);
  i++;
} while (i < 0);
