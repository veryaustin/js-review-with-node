// --- Objects --- //
// var getDieRoll = function(dieSize) {
//   var result = Math.ceil(dieSize * Math.random());
//   return result;
// };

// Object Literal
var die = {
  size: 6,
  totalRolls: 0,
  roll: function () {
    // this is referring to the object itself
    var result = Math.ceil(this.size * Math.random());
    this.totalRolls += 1;
    return result;
  }
};

die.size = 10;
// console.log(die.size);

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls " + die.totalRolls);
console.log(die);