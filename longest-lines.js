var fs  = require("fs");

var lines = fs.readFileSync(process.argv[2]).toString().split('\n'),
    n = lines[0],
    sorted = lines.slice(1).sort(function(a, b){return b.length - a.length});

for(var i=0; i<n; i++){
    console.log(sorted[i]);
}
