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
var getDieRoll = function () {
  console.log("Rolling a die");
  return Math.ceil(6 * Math.random());
};

var firstDie = getDieRoll();
console.log(firstDie);

var secondDie = getDieRoll();
console.log(secondDie);

console.log(firstDie + secondDie);