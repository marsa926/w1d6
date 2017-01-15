var fs = require("fs");
var path = "example.txt";
var data = "This is a test data blah blah blah";
console.log("I'm going to open a file now!");

fs.open('example.txt', 'w+', function(err){
  if (err){
    return console.log(err);
  }
  console.log("Sucessfully opened and the data is :" + data.toString());
});