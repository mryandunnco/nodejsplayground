var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64');

console.log(b.toString('utf-8',0,2));
console.log(b.toString('utf-8',3,5));
// utf-8 is the default