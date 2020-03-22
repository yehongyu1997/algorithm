function fun(o, n) {
    o.m++;
    n++;
}

var obj = { 'm': 10 };
var n;

fun(obj, n);

console.log(obj.m, n)
