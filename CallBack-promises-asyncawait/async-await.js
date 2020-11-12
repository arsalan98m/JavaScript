// async/await ==> (which basically made a synchronous code writing easy but it also uses promises )

// async - async will always be used in function declaration

// await - await will always be used when you are calling the function

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

async function startProcess() {
  try {
    let foodValue = await prepareFood();
    console.log("Food => ", foodValue);

    console.log("abc");

    let frenchToastValue = await prepareFrechToast();
    console.log("Toast => ", frenchToastValue);

    let coffeeValue = await prepareCoffee();
    console.log("Coffee => ", coffeeValue);
  } catch (error) {
    console.log("Error=> ", error);
  }
}

startProcess();
console.log("After Prepare food dinner is ready");
