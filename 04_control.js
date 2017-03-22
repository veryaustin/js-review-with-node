// --- Branches, Loops & Booleans --- //

var getDieRoll = function (dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var roll = getDieRoll(6);

// Branch and console.log if the roll is greater than 5
if (roll >= 5) {
  console.log("Great Roll!");
}

console.log("You rolled a " + roll);