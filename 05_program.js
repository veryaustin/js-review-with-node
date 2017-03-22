// Program to use dice.js
var dice = require("./05_dice");
var die = dice.die

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total rolls " + die.totalRolls);