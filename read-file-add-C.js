// do all work in the "temp" directory
// read from file
// do math
// write to the file
// ** file should retain incrementing values as it is ran each time. **

var fs = require('fs')
var myNumber = undefined


function markDone()
{
    console.log("mark done called!");
}

function writeToFS(the_number, callback)
{
    fs.mkdirSync('temp');
    if (fs.existsSync('temp')) {
        process.chdir('temp');
        fs.writeFileSync('test.txt', 'This is some test text for the file [' + the_number.toString() + ']');
        fs.renameSync('test.txt','new.txt');
        console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');
        console.log('File contents: ' + fs.readFileSync('new.txt').toString());
    }    
    callback()
}

function addOne(callback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        if(err){
            console.log('error happened');
        }else{
            myNumber = parseInt(fileContents);
            myNumber++;
            callback(); // <-- added so that console.log will not fire until completed.    
        }
    });
}

function logMyNumber() {
    console.log(myNumber);
    writeToFS(myNumber, markDone);
    console.log("OK all done...");
}

addOne(logMyNumber);