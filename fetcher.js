const request = require('request');
const fs = require('fs');

const commUrl = process.argv[2];
const pathOfFile = process.argv[3];

request(commUrl , (error, response, body) => {
  if (error) {
    console.log('error:', error)
  }
  // console.log('response:', response) 
  // console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body.length); // Print the HTML for the Google homepage.
  
  fs.writeFile(pathOfFile, body, (err) => {
    if (err) throw err;
    if (!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${pathOfFile}`)
    }
  });
})