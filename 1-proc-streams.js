// A slight variation of the sample found here:
// http://nodejs.org/api/process.html#process_process_stdin


// stream starts paused, so you have to resume it
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('\nData! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

// hit control+D to end the process