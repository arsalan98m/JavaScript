// Web Storage API - Provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

/* 
============================================
Save data on localstorage with key value pair inside local storage with setItem()
============================================
*/

// localStorage.setItem("name", "arsalan");
// sessionStorage.setItem("name", "arsalan");

localStorage.setItem("name", "m.arsalan");
localStorage.setItem("friend", "shaka");
localStorage.setItem("job", "developer");

/* 
============================================
retrieve an item from the localStorage
with getItem()
============================================
*/

const name = localStorage.getItem("name");
console.log("name => ", name);

/* 
============================================
remove one specific item from the localStorage 
with (removeItem)
============================================
*/

localStorage.removeItem("friend");

const anotherName = localStorage.getItem("friend");
console.log("anotherName => ", anotherName);

/* 
============================================
clears the entire local storage
localStorage.clear()
============================================
*/

localStorage.clear();

/*
===================================
Local Storage with Multiple Values

JSON.stringify() (to save multiple items)
JSON.parse() (to recieve multiple items)
===================================
*/

const friends = ["shaka", "bilal", "ahmed"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));

console.log(values[0]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log("fruits=> ", fruits);

// fruits.push("apple");
// fruits.push("mango");

localStorage.setItem("fruits", JSON.stringify(fruits));
