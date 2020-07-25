// var list = document.getElementsByTagName("li");
// console.log(list.length);

// has attrbiute
/*
var para = document.getElementById("p1");

if (para.hasAttribute("class")) {
    alert("available")
} else {
    alert("not available");
}
*/

// getAttribute

/*
var target = document.getElementById("p1");
console.log(target.getAttribute("class"));
*/


// setAttribute
/*
document.getElementById("p1").setAttribute("class", "blue");
var target = document.getElementById("p1");
console.log(target)
*/

// attribute

/*
var target = document.getElementById("p1");
console.log(target.attributes[1].value);
*/

/*
var target = document.getElementById("p1");
console.log(target.attributes[1].nodeName);
*/

/*
var target = document.getElementById("p1");
console.log(target.attributes[1].nodeValue);
*/

// creatingNodes

/*
var element = document.createElement("h1");
var text = document.createTextNode("arsalan");

element.appendChild(text);
console.log(element);


var main = document.getElementById("main");
main.appendChild(element)
*/


function addMessage() {
    var input = document.getElementById("text1");
    var showMessage = document.getElementById("messages");
    var element = document.createElement("li");
    var textNode = document.createTextNode(input.value);
    element.appendChild(textNode);
    showMessage.appendChild(element);

    input.value = "";






}

