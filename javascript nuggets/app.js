// **** Plain function **** //

/*
function hi() {
  return "hello world!!!!";
}
*/

// **** A constant holding an anonymous function: **** //

/*
const hi = function () {
  return "hello world constant";
};
*/

// **** // Turning the "function" into an arrow: **** //

/*
const hi = () => {
  return "hello world from arrow function";
};
*/

// Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:

/*
const hi = () =>(
 "hello world-!";
 )
*/

// Optional step 4: If the component is really short, you can put
// it all on one line, and skip the parentheses:

/*
const hi = () => "hello world!";

console.log(hi());
*/

// **** MAP Method **** //
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

/*
const people = [
  { name: "arsalan", age: 24, position: "developer" },
  { name: "noman", age: 12, position: "designer" },
  { name: "owais", age: 30, positon: "the boss" },
  { name: "imtan", age: 23, positon: "intern" },
];

const ages = people.map((person) => person.age * 2);

console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstname: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");
result.innerHTML = names.join("");
*/

// **** Unique Values **** //
// map - get all instances
// new Set -- narrow down
// ['all',...] - turn it back to array

/*
const menu = [
  { name: "pancakes", category: "breakfast" },
  { name: "burger", category: "lunch" },
  { name: "steak", category: "dinner" },
  { name: "bacon", category: "breakfast" },
  { name: "eggs", category: "breakfast" },
  { name: "pasta", category: "dinner" },
];

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);
*/

// **** Dynamic Object Keys **** //

/*
// dot notation
const person = {
  name: "arsalan",
};

console.log(person.name);
person.age = 25;

console.log(person);

// square bracket notation

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);

let appState = "loading";
appState = "error";
const keyName = "computer";

const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "arsalan");
updateState("job", "developer");
updateState("loading", false);
updateState("products", []);
updateState("name", "ahmed");

console.log(state);
*/

// **** Filter and Find **** //

// Filter - returns a new array, can manipulate the size of new array (unilike map), returns based on condition

// Find - returns single instance , returns first match, if no match, undefined

/*
const people = [
  { name: "arsalan", age: 24, position: "developer" },
  { name: "noman", age: 12, position: "designer" },
  { name: "owais", age: 30, position: "the boss" },
  { name: "imtan", age: 23, position: "intern" },
];

// filter
const youngPeople = people.filter((person) => {
  return person.age < 20;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === "developer");
console.log(developers);

// no match
const seniorDevs = people.filter((person) => person.position === "senior dev");
console.log(seniorDevs);

// find
const arsalan = people.find((person) => person.name === "arsalan");
console.log(arsalan);

const fruits = ["apple", "mango", "orange"];
const fruit = fruits.find((fruit) => fruit === "orange");
console.log(fruit);

// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);
*/

// **** Reduce **** //
// iterates , callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculation
// 2nd parameter ('curr) - current iteration/value

/*
const staff = [
  { name: "arsalan", age: 24, position: "developer", salary: 100 },
  { name: "noman", age: 12, position: "designer", salary: 150 },
  { name: "owais", age: 30, position: "the boss", salary: 1000 },
  { name: "imtan", age: 23, position: "intern", salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log("a=>", total);
  console.log("c=>", person);
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);
*/

// **** Destructuring Array **** //
// faster / easier wat to access/unpack variables from arrays, objects

/*
const fruits = ["orange", "banana", "lemon"];
const friends = ["arsalan", "imran", "owais", "zeeshan"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [arsalan, , owais, zeeshan] = friends;

console.log(arsalan, owais, zeeshan);

let first = "bob";
let second = "john";

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
*/

// **** Destructuring Objects **** //

/*
const arsalan = {
  first: "arsalan",
  last: "manzoor",
  city: "karachi",
  siblings: {
    brother: "rehan",
  },
};

// const firstName = arsalan.first;
// const lastName = arsalan.last;
// const brother = arsalan.siblings.brother;
// console.log(firstName, lastName, brother);

const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { brother: chootaBhai },
} = arsalan;
console.log(firstName, last, city, zip, chootaBhai);
*/

// **** Spread Operator **** //
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and Copy them,

/*
const udemy = "udemy";
const letters = [...udemy];

console.log(letters);

const friends1 = ["imran", "kashif", "sultan", "ahmed", "noman"];
const friends2 = ["nasir", "owais"];

const bestFriend = "arnold";

const friends = [...friends1, ...friends2, bestFriend];
console.log(friends);

// reference
// const newFriends = friends;
// newFriends[0] = "gul";
// console.log(friends);
// console.log(newFriends);

// copy
const newFriends = [...friends];
newFriends[0] = "gul";
console.log(friends);
console.log(newFriends);

// ES 2018 - ES8 Objects

const person = { name: "arsalan", job: "developer" };
const newPerson = { ...person, city: "karachi", job: "junior dev" };
console.log(person);
console.log(newPerson);
*/

// **** Rest Operator **** //
// gathers/collects items
// destructuring items
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

/*
// arrays
const fruits = ["apple", "orange", "lemon", "banana"];
const [first, second, ...rest] = fruits;
console.log(first, second, rest);

// objects
const person = { name: "arsalan", lastName: "manzoor", job: "developer" };
// const { ...other, job } = person;
const { job, ...other } = person;
console.log(job, other);

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

//getAverage(person.name, 89, 76, 81, 100);
const testScores = [23, 2, 1, 33];
getAverage(person.name, ...testScores);
*/

// **** Reduce (Object Example) **** //

/*
const cart = [
  { title: "samung galaxy", price: 599.9, amount: 1 },
  { title: "iphone 5", price: 199.9, amount: 2 },
  { title: "xiaomi redmi note 2", price: 399.9, amount: 1 },
  { title: "xiaomi redmi note 5", price: 699.9, amount: 3 },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count item
    total.totalItems += amount;

    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  { totalItems: 0, cartTotal: 0 }
);
cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItems, cartTotal);
*/

// **** another example **** //

/*
const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const newData = data.reduce((total, repo) => {
    const { language } = repo;

    // if (language) {
    //   if (total[language]) {
    //     total[language] += 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});

  console.log(newData);
};

fetchRepos();
*/

// *** Array.from - Not on PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string,
// nodeList,set

const udemy = "udemy";
console.log(Array.from(udemy));

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);
console.log(items);
console.log(pages);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
