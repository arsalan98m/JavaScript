// JavaScript String Method

/*
1.  length (property)
2.  toLowerCase()
3.  toUpperCase()
4.  includes()
5.  startsWith()
6.  endsWith()
7.  search()
8.  match
9.  indexOf()
10. lastIndexOf()
11. replace()
12. trim()
13. charAt()
14. charCodeAt()
15. fromCharCode()
16. concat()
17. split()
18. repeat()
20. slice()
21. substr()
22. substring()
23. toString()
*/

// Example 1  -- length (The length property returns the length of a string (number of characters)

/*
var str = "JavaScript is a great language";
var a = str.length;

console.log(a);
*/

// Example 2 -- toLowerCase(The toLowerCase() method converts a string to lowercase letters.)

/*
var str = "JavaScript is a great language";
var a = str.toLowerCase();

console.log(a);
*/

// Example 3 -- toUpperCase(The toUpperCase() method converts a string to capital letters.)

/*
var str = "JavaScript is a great language";
var a = str.toUpperCase();

console.log(a);
*/

// Example 4 -- includes(The includes() method determines whether a string contains the characters of a specified string.)

// yeh return main true ya false deta hai

/*
var str = "JavaScript is a great language";
var a = str.includes("great");

console.log(a);
*/

// Example 5 -- startsWith(The startsWith() method determines whether a string begins with the characters of a specified string.)

/*
var str = "JavaScript is a great language";
var a = str.startsWith("Java");

console.log(a);
*/

// Example 6 -- endsWith(The endsWith() method determines whether a string ends with the characters of a specified string.)

/*
var str = "JavaScript is a great language";
var a = str.endsWith("ge");

console.log(a);
*/

// Example 7 -- search(The search() method searches a string for a specified value, and returns the position of the match.)

// search return main agar value mil jati hai tu uska index return karta hai yeh farq hai ismy or includes main

/*
var str = "JavaScript is a great language";
var a = str.search("is");

console.log(a);
*/

// Example 8 -- match(The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.)

// search sirf position return karta jab match same naam ky words 2 ya 3 bar hoon tu unki array bana kar return karta hai

/*
var str = "JavaScript is a great is language";
var a = str.match(/is/g);

console.log(a);
*/

// Example 9 -- indexOf(The indexOf() method returns the position of the first occurrence of a specified value in a string.)

/*
var str = "JavaScript is a great is language";
var a = str.indexOf("is");

console.log(a);
*/

// Example 10 -- lastIndexOf(The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.)

/*
var str = "JavaScript is a great is language";
var a = str.lastIndexOf("is");

console.log(a);
*/

// Example 11 -- replace(The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.)

/*
var str = "JavaScript is a great is language";
var a = str.replace("JavaScript", "Python");

console.log(a);

// globally replacing
var str = "JavaScript is a great is language";
var a = str.replace(/is/g, "are");

console.log(a);
*/

// Example 11 -- trim(The trim() method removes whitespace from both sides of a string.)

// kisi bhi word main extra spaces arahy ho left ya right main tu usko hatany ky liyeh hum trim() use karty hain

/*
var str = "  JavaScript     ";

console.log(str);

var a = str.trim();
console.log(a);
*/

// Example 12 -- charAt(The charAt() method returns the character at the specified index in a string.)

// ismy hum position define karty or us position par jo bhi character hoga woh return ho jayega

/*
var str = "JavaScript is a great is language";
var a = str.charAt(10);

console.log(a);
*/

// Example 13 -- charCodeAt(The charCodeAt() method returns the Unicode of the character at the specified index in a string.)

/*
var str = "JavaScript is a great is language";
var a = str.charCodeAt(0);

console.log(a);
*/

// Example 14 -- fromCharCodeAt(The fromCharCode() method converts Unicode values into characters.)

/*
var a = String.fromCharCode(118);
console.log(a);
*/

// Example 15 -- concat(The concat() method is used to join two or more strings.)

/*
var str1 = "Hello";
var str2 = "World";
var str3 = "great"

var a = str1.concat(str2,str3);
console.log(a);
*/

// Example 16 -- split(The split() method is used to split a string into an array of substrings, and returns the new array.)

/*
var str = "He llo";

var a = str.split(" ");
console.log(a);
*/

// Example 17 -- repeat(The repeat() method returns a new string with a specified number of copies of the string it was called on.)
// repeat function jis bhi string ko humain repeat karna hai or jini bar karana hai uska number hum ismy pass kardengy

/*
var str = "Hello";

var a = str.repeat(3);

console.log(a);
*/

// Example 18 -- slice(The slice() method extracts parts of a string and returns the extracted parts in a new string.)

// this is like array method

/*
var str = "JavaScript is a great is language";
var a = str.slice(0, 3);

console.log(a);
*/

// Example 19 -- substr(The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.)

// this work similar on slice (ismy or slice main differnce k main 3,5 lika to yeh 3 sy shrow karega or usky baad 5 character utha kar return kardega)

/*
var str = "JavaScript is a great is language";
var a = str.substr(3, 5);

console.log(a);
*/

// Example 20 -- substring(The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.)

// this work similar on slice

/*
var str = "JavaScript is a great is language";
var a = str.substring(3, 5);

console.log(a);
*/

// Example 21 -- toString(convert the data type of any object and data type to string)

/*
var a = 12;
var b = a.toString();
console.log(b);

console.log(typeof b);
*/
