var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(
            Math.floor(line / 5) +
            Math.floor((line % 5) / 3) +
            ((line % 5) % 3)
        );
    }
});
