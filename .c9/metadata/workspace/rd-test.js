{"filter":false,"title":"rd-test.js","tooltip":"/rd-test.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["var fs = require('fs');","","if (fs.existsSync('temp')) {","    console.log('Directory exists, removing...');","    if (fs.existsSync('temp/new.txt')) {","        fs.unlinkSync('temp/new.txt');","    }","    fs.rmdirSync('temp');","}","","fs.mkdirSync('temp');","if (fs.existsSync('temp')) {","    process.chdir('temp');","    fs.writeFileSync('test.txt', 'This is some test text for the file');","    fs.renameSync('test.txt','new.txt');","    console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');","    console.log('File contents: ' + fs.readFileSync('new.txt').toString());","}","","// sync function with no callbacks",""]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":0},"end":{"row":21,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1423757690006,"hash":"b223e5a4a1cb0bf91368d270f73341382150d5c2"}