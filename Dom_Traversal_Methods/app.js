// --------- parentElement and parentNode -------

/*
document.getElementById("child-C").parentElement.style.backgroundColor = "red";

var a = document.getElementById("child-C").parentElement;

console.log(a);
*/


// parentElement main agar koi bhi parent na ho tu null return karta hai
// or parentNode main agar koi bhi parent na ho tu kuch na kuch return karega


/*
var a = document.getElementById("main").parentNode;

console.log(a);
*/


// ---- Children and childNodes

/*
document.getElementById("inner").children[1].style.backgroundColor = "red";

var a = document.getElementById("inner").children[1];

console.log(a);
*/

// --- childNode tag ky sath junk artifact ko bhi target karta hai
/*
var a = document.getElementById("inner").childNodes[0].innerHTML;

console.log(a);
*/


// firstChild and lastChild or firstElementChild or lastElementChild
/*
var a = document.getElementById("inner").lastElementChild.innerHTML;
console.log(a);
*/

/*
var a = document.getElementById("inner").lastChild;
console.log(a);
*/

// nextElementSibling or previousElementSibling and nextSibling or privious sibling

/*
var a = document.getElementById("child-C").nextElementSibling;

console.log(a);

*/

var a = document.getElementById("child-C").previousSibling;

console.log(a);
