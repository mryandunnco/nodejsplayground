var fs = require('fs');


// check to see if the file exists, if it doesn't create it
function checkFile(callback)
{
    console.log("starting function checkFile()");
    if (!fs.existsSync('./variable.txt')) { 
        // file doesn't exist so attempt to create it
        fs.writeFile('variable.txt','0', null ,function iCreateFile(err){
            if(err)
            {
                console.log("### error attempting to create file [variable.txt]");
            }
            else
            {
                console.log("Created file [variable.txt]");     
                //callback();
            }
        })
    }else{
        console.log("file already exists");
    }
}

function writeDataToFile(data, callback)
{
    fs.writeFile('variable.txt',data, function iWriteData(err){
        if(err)
        {
            console.log("### error attempting to write data ["+data+"] file [variable.txt]");
        }
        else
        {
            console.log("Wrote data ["+data+"] to file [variable.txt]");            
            //callback();
        }
    })    
}

function addOneToFile(callback)
{
    fs.readFile('./variable.txt', function iGetFileData(err,data){
        if(err)
        {
            console.log("### error reading from file");       
        }else{
            console.log("["+data+"]");
            data = parseInt(data) + 1;
            console.log("["+data+"]");
            writeDataToFile(data, function iNothing(err){
                if(err)
                {
                    console.log("got an error when returned from writeDataToFile()");
                    
                }
                
            });
            //callback();
        }
    });
}

checkFile(addOneToFile());

