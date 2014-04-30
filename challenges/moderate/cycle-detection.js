var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var numbers = line.split(' ');

        for(var i = 0; i < numbers.length; i++){

            var cycle1Char1 = numbers[i];
            var j = numbers.indexOf(cycle1Char1, i+1)

            if(j>=0){

                var cycle1 = numbers.slice(i,j),
                    cycle2 = numbers.slice(j,j+j-i);

                if(cycle1.toString()==cycle2.toString()){

                    for(var k=0; k<cycle1.length; k++){
                        process.stdout.write(cycle1[k]);
                        if(k<cycle1.length-1){
                            process.stdout.write(' ');
                        }else{
                            process.stdout.write('\n');
                        }
                    }

                    return;
                }
            }
        }
    }
});
