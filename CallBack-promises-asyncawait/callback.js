// Call Back ----> (Function inside function)

console.log("Before prepare food");

function prepareFood(callback) {
  setTimeout(() => {
    console.log("prepare food");
    callback("Food is ready");
  }, 10);
}

function prepareFrechToast(callback) {
  setTimeout(() => {
    console.log("Prepare Frech Toast");
    callback("French Toast is ready");
  }, 10);
}

function prepareCoffee(callback) {
  setTimeout(() => {
    console.log("Prepare Coffee");
    callback("Coffee is ready");
  });
}

prepareFood(function (value) {
  console.log("Food = ", value);
  prepareFrechToast(function (value) {
    console.log("French Toast is ready callback = ", value);
    prepareCoffee(function (value) {
      console.log("Coffee is Ready callack = ", value);
    });
  });
});

console.log("After Prepare food dinner is ready");
