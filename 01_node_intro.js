//--- Variable Assignment REPL ---//
// Node does not require var to assign a variable in the REPL

// Assignment
lunch = 'pizza'

// Re-Assignment
lunch = 'fish and chips'

// Strings & Numbers
lunch = '12 inch pizza'
sizeOfParty = 4
totalCost = 14.99

// Math Operations
totalCost / sizeOfParty // 3.7475

// Assignment of math operations to variable
averageCost = totalCost / sizeOfParty

averageCost // 3.7475

// Message
message = 'Your lunch of ' + lunch + ' for ' + sizeOfParty + ' people will cost you ' + averageCost

message
// message = 'Your lunch of 12 inch pizza for 4 people will cost you 3.7475'




//--- Variable Assignment In JS File ---//
// As with all JS files, variable assignment requires var

// Variable Assignment
var lunch = 'pizza';

// Re-Assignment
lunch = 'fish and chips';

// Strings & Numbers
lunch = '12 inch pizza';
var vsizeOfParty = 4;
var totalCost = 14.99;

// Math Operations
console.log(totalCost / sizeOfParty); // 3.7475

// Assignment of math operations to variable
var averageCost = totalCost / sizeOfParty;

console.log(averageCost); // 3.7475

// Message
var message = 'Your lunch of ' + lunch + ' for ' + sizeOfParty + ' people will cost you ' + averageCost;

console.log(message);
// message = 'Your lunch of 12 inch pizza for 4 people will cost you 3.7475'



//--- Bill Calculator Refactor ---//
var totalCost = 14.99;

// Get arguments passed into it when run
var sizeOfParty = process.argv[2];

// Calculate average cost
var averageCost = totalCost / sizeOfParty;

// Console Log Average Cost
console.log("$" + averageCost);