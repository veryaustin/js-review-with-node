// --- Variables --- //

// var x;
// console.log(x);
// Without var x, it wouldr return not defined as the variable x isn't defined. 
// With var x set, it returns as undefined as it sees there is a variable x but nothing is assigned to it




// Define variables in one line
// var x, y = 2;

// x = 3;
// console.log(x);
// 3

// Re-assign the value of x
// x = 5
// console.log(x);
// 5

// console.log(y);
// 2




//--- Types ---//

var x = 3,
  y = 2.5;
var type = typeof 5;
var z = '3';
var result = x > y;

console.log(typeof y);
// number
console.log(type);
// number
console.log(z);
// string
console.log(result);
// True
console.log(typeof result);
// boolean
console.log(typeof console);
// object

var answer = x + y;
console.log(answer);
// 5.5
console.log(typeof answer);
// number

var answer = x + z;
console.log(answer);
// '33'
console.log(typeof answer);
// string

var answer = x * y;
console.log(answer);
// 7.5
console.log(typeof answer);
// number

var answer = z * y;
console.log(answer);
// 7.5
console.log(typeof answer);
// number

// parseInt tries to find a numerical value in a string and returns a number
answer = parseInt(z) + y;
// 5.5