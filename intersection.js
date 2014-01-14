var a = [1, 2, 3, 4, 4],
    b = [3, 4, 5, 6],
    c = [];

for(var i = 0; i < a.length; i++){
    for(var j = 0; j < b.length; j++){
        if(a[i]==b[j]){
            if(c.indexOf(a[i])==-1) c.push(a[i]);
        }
    }
}

console.log(c);
