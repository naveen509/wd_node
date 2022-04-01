var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!-this my text', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// update : method appends the specified content at the end of the specified file: