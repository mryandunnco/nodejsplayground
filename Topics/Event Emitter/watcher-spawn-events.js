//"use strict";
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename){
    throw Error("A file to watch must be specified!");
}

fs.watch(filename, function(){
    var ls = spawn('ls', ['-lh', filename]);
    var output = '';
    
    ls.stdout.on('data', function(chunk){
        output += chunk.toString();
    });
    ls.on('close', function(){
        var parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
    //ls.stdout.pipe(process.stdout);
    //console.log("File "+ filename + "just changed!");
});

console.log("Now watching "+filename+ " for changes...");