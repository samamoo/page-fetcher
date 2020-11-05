const request = require('request');
const fs = require('fs');

const commUrl = process.argv[2];
const pathOfFile = process.argv[3];

request(commUrl , (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body.length); // Print the HTML for the Google homepage.
  console.log(`Downloaded and saved ${body.length} bytes to ${pathOfFile}`)
})

fs.writeFile(pathOfFile, { encoding: 'utf8'}, body) => {
console.log("Copied web data to index.html")
}