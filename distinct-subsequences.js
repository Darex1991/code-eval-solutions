var fs  = require("fs");

function getSubSeq(w1, w2, i, j){

    var matches = 0;

    if(j==w2.length){
        return 1;
    }

    for(;i<w1.length;i++){
        if(w1[i]==w2[j]){
            matches += getSubSeq(w1, w2, i+1, j+1);
        }
    }

    return matches;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var words = line.split(','),
            w1 = words[0],
            w2 = words[1];
        console.log(getSubSeq(w1, w2, 0, 0));
    }
});
