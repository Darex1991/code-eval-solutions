//https://www.codeeval.com/public_sc/60/

var history = {},
    unexplored = {},
    x = 0,
    y = 0;

function sumDigits(digits){
    if(digits.length <= 0){
        return 0;
    }
    else if(digits.length == 1 ){
        return parseInt(digits[0])
    }
    else if(digits.length > 1){
        return parseInt(digits[0]) + sumDigits(digits.slice(1));
    }
}

function isValid(p){
    return sumDigits(Math.abs(p.x)+''+ Math.abs(p.y)) <= 19;
}

function getPoint(x, y){
    return {
        x: x,
        y: y
    };
}

function getAdjacent(p){
    var x = p.x,
        y = p.y;
    return [getPoint(x+1,y), getPoint(x-1,y), getPoint(x,y+1), getPoint(x,y-1)];
}

function getAddress(p){
    return p.x+','+p.y;
}

var startingPoint = getPoint(x, y);
unexplored[getAddress(startingPoint)]=startingPoint;

function count(obj){
    var n = 0;
    for(var k in obj){
        n++;
    }
    return n;
}

var validCount = 0;
while(count(unexplored)>0){
    for(var k in unexplored){
        var p = unexplored[k];
        delete unexplored[k];
        if(isValid(p)){
            getAdjacent(p).forEach(
                function(p){
                    if(history[getAddress(p)]==null){
                        unexplored[p.x + ',' + p.y] = p;
                    }
                }
            );
            validCount++;
        }
        history[getAddress(p)] = p;
    }
}
console.log(validCount);
