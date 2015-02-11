process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('\nData! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
    process.stderr.write("Why are you trying to terminate me?!?  :-)");
});

// kill -TERM [[proc id]] 
// to fire sigterm event

console.log("Node is running as process #" + process.pid);