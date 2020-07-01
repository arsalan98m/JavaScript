function popup(message) {
  alert("Hello " + message);
  alert("New " + message);
}

function greetUser() {
  alert("Hello greet user!");
}

function expand() {
  alert("Expand Logic here.");
}

// function checkAddress() {
//   //alert("Hello form");

//   alert(document.getElementById("emai"));
//   alert(document.getElementById("email").value);
//   console.log(document.getElementById("email").value);
// }

function checkAddress() {
  var val = document.getElementById("email").value;

  if (val === "") {
    alert("Email address required.");
  } else {
    alert("Thank you for providing your email address. " + val);
    console.log(val);
  }
}
