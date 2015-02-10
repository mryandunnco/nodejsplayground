// Be sure to run "npm install request" in this directory
// before running this script
var request = require('request');

request('http://www.ryandunn.co/about', function(error, response, body) {
    console.log("--- trying to connect ---");
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
    console.log("--- connection closed ---");
});
