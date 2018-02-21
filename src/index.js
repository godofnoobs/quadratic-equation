module.exports = function solveEquation(equation) {
    var re = /[^\^]-?\s?\d+/g;
    var args = equation.match(re);
    args = args.map(function (str) {return parseFloat(str.replace(/\s+/g, ''));});
    var d = Math.pow(args[1],2) - 4*args[0]*args[2];
    var x1 = (-args[1]-Math.pow(d, 0.5))/(2*args[0]);
    var x2 = (-args[1]+Math.pow(d, 0.5))/(2*args[0]);
    res = [Math.round(x1), Math.round(x2)];
    if (x1 > x2)
        res.reverse();
    return res;
}

