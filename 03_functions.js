// --- Functions --- //

// var firstDie = Math.ceil(6 * Math.random());
// var secondDie = Math.ceil(6 * Math.random());

// var value = 6 * Math.random();
// var roll = Math.ceil(value);
// console.log(roll);

// Refactor of above
// console.log(Math.ceil(6 * Math.random()));

// console.log(firstDie);
// console.log(secondDie);
// console.log(firstDie + secondDie);



// --- Refactor Die Roll into function --- //

// var getDieRoll = function() {
//   console.log("Rolling a die");
//   return Math.ceil(6 * Math.random());
// };

// var firstDie = getDieRoll();
// console.log(firstDie);

// var secondDie = getDieRoll();
// console.log(secondDie);

// console.log(firstDie + secondDie);



// --- Refactor Die Roll acceps different sized dice --- //

// var getDieRoll = function(dieSize) {
//   console.log(dieSize);
//   return Math.ceil(dieSize * Math.random());
// };

// var firstDie = getDieRoll(10);
// var secondDie = getDieRoll(10);
// console.log(firstDie);
// console.log(secondDie);
// console.log(firstDie + secondDie);



// --- Scope --- //

var getDieRoll = function (dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var showResult = function () {
  // firstDie variable is available because it's defined at the global scope
  console.log(firstDie);
  // secondtDie variable is available because it's defined at the global scope
  console.log(secondDie);
  console.log(firstDie + secondDie);
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(10);
showResult();

// console.log(result);
// Result is a local variable and is not available outside the function body of getDieRoll

// console.log(dieSize);
// dieSize is only available inside the function