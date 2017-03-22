var book = require("./lib/grades").book;

// var scores = [90, 85, 72];

for (var i = 2; i < process.argv.length; i++) {
  book.addGrade(parseInt(process.argv[i]));
}

console.log(book.getAverage());