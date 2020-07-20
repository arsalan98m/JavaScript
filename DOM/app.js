// **** DOM Targeting Methods ****** //


/*
var element;
element = document.all; // return array of all elements
console.log(element);
*/


/*
element = document.all[2];

console.log(element);
*/

/*
element = document.links[4];

console.log(element);
*/

/*
element = document.images;

console.log(element);
*/

/*
element = document.URL;
console.log(element);

*/
/*
element = document.getElementById("footer");
console.log(element);

*/

/*
element = document.getElementsByClassName("list");
console.log(element);
*/

/*
element = document.getElementsByTagName("ul");
console.log(element);
*/


// **** DOM Get and Set Value Method **** //

// What we can get with DOM?
// HTML, Text, Attribute

// --- DOM Set Method ----- //

// innerText (Html ky andar ka text return karta hai)

/*
var element;
element = document.getElementById("header").innerText;
console.log(element);
*/


/*
element = document.getElementById("content").innerText;
console.log(element);
*/

// innerHTML ( Yeh poori ki poori html return karta hai)
/*
element = document.getElementById("header").innerHTML;
console.log(element);
*/

// getAttribute (return karta hai attribute ki value jo bhi hum ny pass ki hogi)
/*
element = document.getElementById("header").getAttribute("sTyle");
console.log(element);
*/

// getAttributeNodes (return karta hai attribute ka naam or uski value)
/*
element = document.getElementById("header").getAttributeNode("style");
console.log(element);
*/

// attributes (jitny bhi attributes hai woh sary k sary return kar dega ek barhai array bana kar)


/*
element = document.getElementById("header").attributes;
console.log(element);

element = document.getElementById("header").attributes[0].name;
console.log(element);

element = document.getElementById("header").attributes[0].value;
console.log(element);
*/


// ----- DOM Set Methods ------- //

// innerText
// document.getElementById("header").innerText = "<h1>WOW</h1>";

// innerHTML
// document.getElementById("header").innerHTML = "<h1>WOW</h1>";

// setAttribute
/*
document.getElementById("header").setAttribute("class","xyz" );

element = document.getElementById("header").attributes[0];
console.log(element);

document.getElementById("header").setAttribute("style","border: 10px dotted yellow");
*/

// attributes

/*
document.getElementById("header").attributes[0].value="abc";
element = document.getElementById("header").attributes[0];
console.log(element);
*/

// remove attributes

// document.getElementById("header").removeAttribute("class");

// *** NEW DOM Targeting Methods querySelector and querySelectorAll *** //

/*
document.querySelector("#header").innerHTML = "<h1>NEW Text </h1>";

element = document.querySelector("#header").getAttribute("class");

console.log(element);
*/

/*
element = document.querySelector(".list");
console.log(element);
*/

/*
element = document.querySelectorAll(".list")[1].innerHTML;
console.log(element);
*/


/*
element = document.querySelectorAll("ul")[0].innerText;
console.log(element);
*/

/*
element = document.querySelectorAll("#header h1");
console.log(element);
*/


// **** DOM CSS Styling methods **** //

// style, className, classList 

/*
element = document.querySelector("#header").style.border;
console.log(element);

document.querySelector("#header").style.color="purple";

element = document.querySelector("#header").style.color;
console.log(element);


document.querySelector("#header").style.backgroundColor="tan";


*/

/*
document.querySelector("#header").className = "abc";

element = document.querySelector("#header").className;

console.log(element);
*/

/*
document.querySelector("#header").classList = "xyz";
element = document.querySelector("#header").classList;
console.log(element)
*/

/*
document.querySelector("#header").classList.add("xyz", "efg");
element = document.querySelector("#header").classList;
console.log(element);
*/

/*
document.querySelector("#header").classList.remove("xyz", "efg");
element = document.querySelector("#header").classList;
console.log(element);
*/

// *** Basic Events *** //

/*
document.getElementById("header").onclick = abc;

function abc() {
    document.getElementById("header").style.backgroundColor = "yellowgreen";
}
*/

// --- adEventListner ---- //

/*
document.getElementById("header").addEventListener("mouseenter", function () {
    this.style.border = "10px solid blue"
});


document.getElementById("header").addEventListener("click", abc);
function abc() {
    document.getElementById("header").style.backgroundColor = "brown";
}
*/


document.getElementById("header").addEventListener("mouseleave", abc);
document.getElementById("header").addEventListener("click", xyz);

function abc() {
    document.getElementById("header").style.backgroundColor = "brown";
}

function xyz() {
    document.getElementById("header").removeEventListener('mouseleave', abc);
}