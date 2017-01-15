//FOR READABLE STREAMING----------------------------------------

// var fs = require("fs");
// var data = '';

// //creat a readable stream
// var readerStream = fs.createReadStream('input01.txt');

// //set the encoding to be uft8.
// readerStream.setEncoding('UTF8');

// //handle stream events -> data, end and error
// readerStream.on('data', function(chunk){
//   data += chunk;
// });

// readerStream.on('end', function(){
//   console.log(data);
// });

// readerStream.on('error', function(err){
//   console.log(err.stack);
// });

// console.log("Program Ended");


//-----------------------------------------------------------

//FOR WRITING STREAMING--------------------------------------
// var fs = require("fs");
// var data = 'Simply Easy Learning';

// //creat a readable stream
// var writerStream = fs.createWriteStream('input01.txt');

// //set the encoding to be uft8.
// writerStream.write(data,'UTF8');

// writerStream.end();

// //handle stream events -> data, end and error
// writerStream.on('finish', function(){
//  console.log("Write completed.");
// });

// writerStream.on('error', function(err){
//   console.log(err.stack);
// });

// console.log("Program Ended");

//--------------------------------------------------------------
//FOR PIPING STREAMING: take input and create and output--------

// var fs = require("fs");

// //creat a readable stream
// var readerStream = fs.createRead  Stream('input01.txt');

// //create a writeable stream
// var writerStream = fs.createWriteStream('output01.txt');

// //pupt the read and write operations
// //read input01.txt and write data to output01.txt
// readerStream.pipe(writerStream);

// console.log("DONE and DONE");

//--------------------------------------------------------------
//CHAINING STREAM: connect the output of one stream to-
// another and create a chain of multiple stream operation------

// var fs = require("fs");
// var zlib = require('zlib');

// //compress the file input01.txt to input01.txt.gz
// fs.createReadStream('input01.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input01.txt.gz'));

// console.log("File Compressed.");

//------when you node. main.js you will compress and have
// created a input01.txt.gz in the directory.
//---------------------------------------------------------------
//FOR DECOMPRESSING------------------------------------------

var fs = require("fs");
var zlib = require('zlib');

//decompress the file input01.txt.gz
fs.createReadStream('input01.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input01.txt'));

console.log("File Decompressed.");