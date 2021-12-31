"use strict";
exports.__esModule = true;
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var numTostr = function () {
    return parseInt(screen.value);
};
//Dispaly Value
for (var _i = 0, _a = btn; _i < _a.length; _i++) {
    var item = _a[_i];
    item.addEventListener('click', function (e) {
        var event = e.target;
        var btntext = event.innerText;
        screen.value += btntext;
    });
}
//sin
var sin = function () {
    screen.value = String(Math.sin(numTostr()));
};
//asin
var sin1 = function () {
    screen.value = String(Math.asin(numTostr()));
};
//cos
var cos = function () {
    screen.value = String(Math.cos(numTostr()));
};
//acos
var cos1 = function () {
    screen.value = String(Math.acos(numTostr()));
};
//tan
var tan = function () {
    screen.value = String(Math.tan(numTostr()));
};
//atan
var tan1 = function () {
    screen.value = String(Math.atan(numTostr()));
};
//power
var pow = function () {
    screen.value = String(Math.pow(numTostr(), 2));
};
//csc
var csc = function () {
    screen.value = String(1 / Math.sin(numTostr()));
};
//seccos
var sec = function () {
    screen.value = String(1 / Math.cos(numTostr()));
};
//squre root
var sqrt = function () {
    screen.value = String(Math.sqrt(numTostr()));
};
//logrithm
var log = function () {
    screen.value = String(Math.log(numTostr()));
};
//atan2
var tanh = function () {
    screen.value = String(Math.atan2(numTostr(), 2));
};
//logrithm
var in1 = function () {
    screen.value = String(Math.log(numTostr()));
};
//value of pi
var pi = function () {
    screen.value = String(3.14159265359);
};
//value of e
var e = function () {
    screen.value = String(2.71828182846);
};
//Fact
var fact = function (i, num, f) {
    f = 1;
    num = numTostr();
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = String(f);
};
//clear[CE]
var backspace = function () {
    screen.value = screen.value.substring(0, screen.value.length - 1);
};
//abs
var abs = function () {
    screen.value = String(Math.abs(numTostr()));
};
//round
var round = function () {
    screen.value = String(Math.round(numTostr()));
};
//ceil
var ceil = function () {
    screen.value = String(Math.ceil(numTostr()));
};
//floor
var floor = function () {
    screen.value = String(Math.floor(numTostr()));
};
//exp
var exp = function () {
    screen.value = String(Math.exp(numTostr()));
};
//+-
var signChange = function (plus) {
    var plus = numTostr();
    var nem = plus * -1;
    screen.value = String(nem);
};
//fatorial
var x = function (fact, num, i) {
    fact = 1;
    num = numTostr();
    for (i = 1; i <= num; i++) {
        fact = fact * 10;
    }
    i = i - 1;
    screen.value = String(fact);
};
//abs2
var abs1 = function () {
    screen.value = String(Math.abs(numTostr()));
};
//degeer to radians
var deg = function (degrees) {
    screen.value = String((degrees * Math.PI) / 180.0);
};
//fahrenheit to celsius
var fe = function () {
    screen.value = String((numTostr() - 32) / 1.8);
};
//Memory fuction
var ms = [];
var index = 0;
var memory = function (x) {
    //M+
    if (x == "m+") {
        ms.push(numTostr());
        screen.value = "";
    }
    //M-
    else if (x == "m-") {
        var temp = "-" + screen.value;
        ms.push(parseInt(temp));
        screen.value = "";
    }
    //MC Memory clear
    else if (x == "mc") {
        ms.splice(0, ms.length);
        screen.value = "";
    }
    //MR Memory Recall
    else if (x == "mr") {
        var sum = ms.reduce(function (a, b) {
            return a + b;
        }, 0);
        screen.value = sum;
    }
    //MS Memory Storage
    else if (x == "ms") {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            index %= ms.length;
            screen.value = ms[index];
            index++;
        }
    }
};
