var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error( "(" + waitTime + " ms) Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

// Version 1:  Named function to process results:

// var processResults = function(err, results, time) {
//     if (err) {
//         console.log("ERROR: " + err.message);
//     } else {
//         console.log("The results are: " + results + " (" + time + " ms)");
//     }
// };

// evenDoubler(4, processResults);
// evenDoubler(5, processResults);


// Version 2:  Use anonymous function and track callbacks to print "Done!" message

var count = 0;

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("CLEAN: (" + time + " ms) The results are: " + results + " ");
        }
        if (++count === 10) {
            console.log("CLEAN: (" + time + " ms) Done!");
        }
    });
};

console.log("-----");

/**
 * Example Output *
Calling evenDoubler for value: 0                        
Calling evenDoubler for value: 1                        
Calling evenDoubler for value: 2                        
Calling evenDoubler for value: 3                        
Calling evenDoubler for value: 4                        
Calling evenDoubler for value: 5                        
Calling evenDoubler for value: 6                        
Calling evenDoubler for value: 7                        
Calling evenDoubler for value: 8                        
Calling evenDoubler for value: 9                        
-----                                                   
ERROR: (6 ms) Odd input                                 
ERROR: (127 ms) Odd input                               
ERROR: (203 ms) Odd input                               
CLEAN: (232 ms) The results are: 8                      
ERROR: (307 ms) Odd input                               
CLEAN: (350 ms) The results are: 16                     
CLEAN: (516 ms) The results are: 12                     
CLEAN: (706 ms) The results are: 0                      
ERROR: (777 ms) Odd input                               
CLEAN: (796 ms) The results are: 4                      
CLEAN: (796 ms) Done!    
*/
