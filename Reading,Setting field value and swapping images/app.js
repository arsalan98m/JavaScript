/*
function expandLoris() {
  var expandedParagraph =
    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.     Slow lorises have a toxic bite, a rare trait among mammals.";

  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function placeAlist() {
  var listToPlace =
    "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";

  document.getElementById("lorisList").innerHTML = listToPlace;
}

function peekAtContent() {
  var whatsThere = document.getElementById("content").innerHTML;
  console.log(whatsThere);
}

peekAtContent();
*/

/*
function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}

function makeBig() {
  document.getElementById("p1").className += " big";
}

makeBig();
*/

/*
function swapPic(id, newPic) {
  document.getElementById(id).src = newPic;
}
*/

/*
function getAddress() {
  var link = document.getElementById("link1");
  var address = link.href;

  console.log(address);
}

getAddress();

function enlargeForm() {
  var frm = document.getElementById("link1");
  frm.className = "jumbo";
}

enlargeForm();
*/

/*
function makeBig() {
  document.getElementById("p1").style.fontSize = "5em";
  document.getElementById("p1").style.margin = "80px 100px";
}

makeBig();

function floatImage() {
  document.getElementById("pic99").style.cssFloat = "right";
}

floatImage();

function invisible() {
  document.getElementById("div9").style.visibility = "hidden";
}

invisible();
*/

/*
var par = document.getElementsByTagName("p");

var textInMiddleParagraph = par[1].innerHTML;
textInMiddleParagraph = "this is new text";

console.log(textInMiddleParagraph);

for (var i = 0; i < par.length; i++) {
  par[i].style.color = "red";
}

par[1].style.color = "blue";
*/

var e = document.getElementById("rules");
var paragraphs = e.getElementsByTagName("p");

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "green";
  paragraphs[i].style.fontSize = "100px";
}

function turnPink() {
  var t = document.getElementById("table9");
  var cells = t.getElementsByTagName("td");

  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
  }
}
