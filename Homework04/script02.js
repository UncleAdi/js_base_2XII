/* 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем */

var number = +prompt('Введіть число:');
var stup = +prompt('Введіть ступінь:');

function f1(res) {
    if (res < 0) {
        return -res;
    } else {
        return res;
    }
}

function f2(a, b) {
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    }
    var c = 1;
    for (var n = 0; n < f1(b); n++) {
        c = c * a;
    }
    if (b < 0) {
        return 1 / c;
    }
    return c;
}

console.log(f2(number, stup));