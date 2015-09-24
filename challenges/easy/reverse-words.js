var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var words = line.split(' ');
        for(var i=words.length-1; i>=0; i--){
            process.stdout.write(words[i]);
            if(i>0){
                process.stdout.write(' ');
            }
        }
        process.stdout.write('\n');
    }
});

// Or
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        array = line.split(' ');
        leng = array.length;
        secondLeng = leng;
        
        for(var i = 0 ; i<Math.floor((leng) /2); i++){
            b = array[i];
            array[i] = array[secondLeng-1];
            array[secondLeng-1] = b;
            secondLeng -= 1;
        }
        console.log(array.join(' '));
    }
});
