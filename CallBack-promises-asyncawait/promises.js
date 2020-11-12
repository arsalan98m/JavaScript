// Promises much simpler than callback

// promise promising you that it will return you something
// wada ya tu wafa hoga ya tooty ga

// promise - this is an object and it requires a function which accepts two values
// a standard way of calling this two values is resolve and reject

console.log("Before prepare food");

function prepareFood(data) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (data !== 2) {
        console.log("prepare food");
        resolve("Food is ready");
      } else {
        reject("Value not acceptable");
      }
    }, 10);
  });

  return promise;
}

function prepareFrechToast() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Prepare Frech Toast");
      resolve("French Toast is ready");
    }, 10);
  });

  return promise;
}

function prepareCoffee() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Prepare Coffee");
      resolve("Coffee is ready");
    });
  });

  return promise;
}

let promise = prepareFood(2);

promise
  .then(function (value) {
    console.log("Food is ready promise =>", value);
    return prepareFrechToast();
  })
  .then(function (value) {
    console.log("French Toast is ready promise=> ", value);
    return prepareCoffee();
  })
  .then(function (value) {
    console.log("Coffee is ready promise=> ", value);
  })
  .catch(function (error) {
    console.log("error=> ", error);
  });

console.log("After Prepare food dinner is ready");
