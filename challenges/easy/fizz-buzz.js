var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var lineArgs = line.split(' '),
            a = lineArgs[0],
            b = lineArgs[1],
            n = lineArgs[2];

        for(var i=1;i<=n;i++){

            if(i % a == 0 && i % b == 0){
                process.stdout.write('FB');
            }
            else if(i % a == 0){
                process.stdout.write('F');
            }
            else if(i % b == 0){
                process.stdout.write('B');
            }
            else {
                process.stdout.write(i+'');
            }

            if(i<n){
                process.stdout.write(' ');
            }else{
                process.stdout.write('\n');
            }

        }
    }
});
