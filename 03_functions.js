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

var getDieRoll = function (dieSize) {
  console.log(dieSize);
  return Math.ceil(dieSize * Math.random());
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(10);
console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);