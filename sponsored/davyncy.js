//https://www.codeeval.com/public_sc/77/

function overlap(a, b){
    for(var i=b.length; i>0; i--){
        var c = b.substr(0, i),
            m = a.indexOf(c);
        if(m>=0 && m==a.length-i){
            return i;
        }
    }
    return 0;
}

function contained(haystack, needle){
    if(haystack.indexOf(needle)>-1){
        return needle.length;
    }
    return 0;
}

function mergePrefix(fragments, o, i, j){
    fragments[i] = fragments[j].substr(0, fragments[j].length-o) + fragments[i];
};

function mergeSuffix(fragments, o, i, j){
    fragments[i] = fragments[i] + fragments[j].substr(o);
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var fragments = line.split(';');

        FragmentIteration:
        while(fragments.length>1){

            var merge, maxo=0;

            for(var i=0; i<fragments.length; i++){
                for(var j=i+1; j<fragments.length; j++){
                    var mergeInner,
                        f1 = fragments[i],
                        f2 = fragments[j];

                    if(contained(f1, f2) || contained(f2, f1)){
                        fragments.splice(j, 1);
                        continue FragmentIteration;
                    }

                    //does f1 start with end of f2?
                    var k = overlap(f2, f1);

                    //does f1 end with start of f2?
                    var l = overlap(f1, f2);

                    var o = [k, l].sort()[1];

                    if(o>maxo){

                        maxo=o;

                        if(k==o){
                            mergeInner = mergePrefix;
                        }else{
                            mergeInner = mergeSuffix;
                        }

                        merge =
                            function(o, i, j){
                                return function(){
                                    mergeInner(fragments, o, i, j);
                                }
                            }(o, i, j);
                    }
                }
            }
            merge();
            fragments.splice(j, 1);
        }
        console.log(fragments[0]);
    }
});
