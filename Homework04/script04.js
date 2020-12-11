/* 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл. */


function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

var n = +prompt("n");

console.log(fibonacci(n));