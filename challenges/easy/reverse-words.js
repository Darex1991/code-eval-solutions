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
