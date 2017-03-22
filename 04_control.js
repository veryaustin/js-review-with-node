// --- Branches, Loops & Booleans --- //

var getDieRoll = function (dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

var roll = getDieRoll(6);

// Branch and console.log if the roll is greater than or equal to 2 AND less than or equal to 3
// if(roll >= 2 && roll <= 3) {
//   console.log("Great Roll!");
// }
// console.log("You rolled a " + roll);

// Branch and console.log if roll is equal to 1 OR roll is equal to 6
// if(roll == 2 || roll == 6) {
//   console.log("Great Roll!");
// }

// console.log("You rolled a " + roll);

// Branch and console.log if roll is 2, 3, 4, 5.
// if (!(roll == 1 || roll == 6)) {
//   console.log("Great Roll!");
// };

// console.log("You rolled a " + roll);


// Branch and console.log else
// if (roll >= 1 && roll <= 5) {
//   console.log("Great Roll!");
// } else {
//   console.log("That was an ok roll");
// };

// console.log("You rolled a " + roll);

// Branch and console.log else if
// if (roll >= 1 && roll <= 5) {
//   console.log("Great Roll!");
// } else if(roll == 1) {
//   console.log("Terrible roll");
// } else {
//   console.log("That was an ok roll");
// };

// console.log("You rolled a " + roll);



// While Loop
// while(roll < 4){
//   roll = getDieRoll(6);
// }

// if (roll >= 5) {
//   console.log("Great Roll!");
// } else if(roll == 1) {
//   console.log("Terrible roll");
// } else {
//   console.log("That was an ok roll");
// };

// console.log("You rolled a " + roll);



// While Loop - Executres 0 or more times
// while(roll < 4) {
//   console.log(roll);
//   roll = getDieRoll(6);
// }

// Do While Loop always executes at least once
// do {
//   roll = getDieRoll(6);
//   console.log(roll);
// } while (roll < 4)

// if (roll >= 5) {
//   console.log("Great Roll!");
// } else if(roll == 1) {
//   console.log("Terrible roll");
// } else {
//   console.log("That was an ok roll");
// };

// console.log("You rolled a " + roll);



// For Loops
for (var i = 0; i < 10; i++) {
  console.log(roll);
  roll = getDieRoll(6);
};

if (roll >= 5) {
  console.log("Great Roll!");
} else if (roll == 1) {
  console.log("Terrible roll");
} else {
  console.log("That was an ok roll");
};

console.log("You rolled a " + roll);

