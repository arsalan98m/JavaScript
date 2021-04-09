// In Regular Function (not arrow) "this"
// determine by "HOW"!!! a function is invoked

// defaults to global window
// arrow function pumps the break 

// console.log(this); // targets the global window object

function showThis(){
  console.log(this)
}

const abid = {
  name:"abid",
  showThis:showThis
}

const nasir = {
  name:"nasir",
  showThis:showThis

}

abid.showThis();
nasir.showThis();
