



var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback() // <-- added
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber);

/**
 * 
 * https://github.com/maxogden/art-of-node#callbacks 
 * 
To break down this example even more, here is a timeline of events that happen when we run this program:

1: the code is parsed, which means if there are any syntax errors they would make the program break. During this 
initial phase there are 4 things that get defined: fs, myNumber, addOne, and logMyNumber. Note that these are just 
being defined, no functions have been called/invoked yet.

2: When the last line of our program gets executed addOne gets invoked, getting passed in the logMyNumber
function as callback, which is what we want to be called when addOne is complete. This immediately causes 
the asynchronous fs.readFile function to kick off. This part of the program takes a while to finish.

3: with nothing to do, node idles for a bit as it waits for readFile to finish. If there was anything else
to do during this time, node would be available for work.

4: readFile finishes and calls its callback, doneReading, which then in turn increments the number and
then immediately invokes the function that addOne passed in (its callback), logMyNumber.

###
*/