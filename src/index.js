module.exports = function solveEquation(equation) {
//function solveEquation(equation) {
    var re = /[^\^]-?\s?\d+/g;
    var args = equation.match(re)
            .map(function (str) {return str.split(' ').join('');})
            .map(function (str) {return parseInt(str);});
    var d = Math.pow(args[1],2) - 4*args[0]*args[2];
    var x1 = (-args[1]-Math.pow(d, 0.5))/(2*args[0]);
    var x2 = (-args[1]+Math.pow(d, 0.5))/(2*args[0]);
    res = [Math.round(x1), Math.round(x2)];
    res.sort(function(a,b) {return a-b;});
    return res;
}

