var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
};

console.log(plan1);

// now let's add one more property

plan1.discountMonths = [6, 7, 11];
console.log(plan1);

console.log(plan1.discountMonths[1]);

plan1.price = 4.89;

console.log(plan1);

var deal1 = {};

deal1.market = undefined;

console.log(deal1);

// you can delete a property of an object

delete deal1.market;

console.log(deal1);

// you can check if property exist or not

propertyExists = "market" in deal1;
console.log(propertyExists);

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7],
};

function calcAnnual(percentIfDisc) {
  var bestPrice = plan1.price;
  var currDate = new Date();
  var thisMo = currDate.getMonth();
  for (var i = 0; i < plan1.discountMonths.length; i++) {
    if (plan1.discountMonths[i] === thisMo) {
      bestPrice = plan1.price * percentIfDisc;

      break;
    }
  }
  return bestPrice * 12;
}

var annualPrice = calcAnnual(0.815);

console.log(annualPrice);

// You can attach a function to an object, and the function becomes that object's method.

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7],
  calcAnnual: function (percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === thisMo) {
        bestPrice = this.price * percentIfDisc;

        break;
      }
    }
    return bestPrice * 12;
  },
};
// When you write this.whatever, JavaScript is smart enough to understand that you're referring to a property of the object that's being defined—in this case, plan1.

var newAnnualPrice = plan1.calcAnnual(0.76);
console.log(newAnnualPrice);

// Constructor function

// But that only gets us an object that represents the first plan. I'd have to do the same thing
// again for the Professional and Ultimate plans. This is too much hand craftsmanship. We need a
// factory to crank out these things by the dozen. JavaScript lets you build such a factory. It's
// called a constructor function.

function Plan(name, price, space, transer, pages) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transer = transer;
  this.pages = pages;
}

// This would be a plain-vanilla function definition but for two differences:

// 1) The function name is capitalized. JavaScript doesn't care whether you do this or not, but
//it's conventional to do it to distinguish constructor functions from regular functions.

// 2)Each of the parameter values is assigned to a variable. But the variable is a property
// attached to some object whose name hasn't been specified yet. But don't worry. Just as the
// parameter values will be filled in by the calling code, so will the name of the object.

// creating object for basic plan

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
console.log(plan1);

var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
console.log(plan2);

var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);
console.log(plan3);

// In the following code, the constructor creates the same method for every object that is
// created, as it creates all the properties for each object.

function Plan(name, price, space, transfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
  Plan.prototype.calcAnnual = function (percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();

    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === thisMo) {
        bestPrice = this.price * percentIfDisc;
        break;
      }

      return bestPrice * 12;
    }
  };
}

var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
console.log(p1);

// Once the objects and their properties and method are created by the code above, this is the code that calls, for example, the method for the Premium plan.

var annualPrice = p1.calcAnnual(0.85);
console.log(annualPrice);

var p2 = new Plan("Basic", 5.99, 500, 5000, 50, [6, 7, 11]);
console.log(p2);

// Once the objects and their properties and method are created by the code above, this is the code that calls, for example, the method for the Premium plan.

var annualPrice = p2.calcAnnual();
console.log(annualPrice);
