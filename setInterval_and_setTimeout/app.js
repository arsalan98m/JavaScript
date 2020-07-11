// setInterval => repeatativley running (jab tak roka na jay rukna nahi hai)
// setInterval 2 arguments lega pehla function jo bar bar chaly ga or dosra argument main yeh time leta hai

// setTimeOut => after something (ismy hum time define karty or kehty hain itny time baad chal jana)

/*
function timer() {
  console.log("running");
}

setInterval(timer, 1000);
*/

/*
function timeOut() {
  console.log("running");
}

setTimeout(timeOut, 3000);
*/

var count = 0;
var interval;

function timer() {
  count++;
  console.log(count);
}

interval = setInterval(timer, 1000);

setTimeout(function () {
  console.log("Bye");
  clearInterval(interval);
}, 5000);
