var request = require('request');

// Version 1:  Pipe HTML to standard out
// var s = request('http://www.pluralsight.com/');
// s.pipe(process.stdout);

// Version 2:  Chain request and pipe together
// request('http://www.ryandunn.co/').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
// var fs = require('fs');
// request('http://www.ryandunn.co/').pipe(fs.createWriteStream('ryandunnco.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
var fs = require('fs');
var zlib = require('zlib'); 
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('ryandunnco.html.gz'));