var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3_writefile.txt', 'Hello content!-replaced', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// update : method replaces the specified file and content: