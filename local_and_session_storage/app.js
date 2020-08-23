// Add a key value pair inside local storage
localStorage.setItem("Name", "arsalan");
localStorage.setItem("Name 2", "kamran");

// retrieve an item from the local storage
let name = localStorage.getItem("Name");
console.log(name);

// clears the entire local storage
// localStorage.clear();

// clear particular key/value pair
localStorage.removeItem("Name");

// storing array item
let impArray = ["adrak", "pyaz", "bhindi"];
localStorage.setItem("Sabzi", JSON.stringify(impArray));

// Retrieving array item
let sabzi = JSON.parse(localStorage.getItem("Sabzi"));
console.log(sabzi[0]);

// **** Session storage methods are same as localStorage **** //

sessionStorage.setItem("sessionName1", "new name 1");
sessionStorage.setItem("sessionName2", "new item 2");
sessionStorage.setItem("sessionName3", "new item 3");
