// Object Literal For A Dice
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

exports.die = die;