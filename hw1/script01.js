/* 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
    Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2. */

    var y1, e2, x1, x2, k, b;

    y1 = +prompt ('insert the value of y1', 0);
    y2 = +prompt ('insert the value of y2', 0);
    x1 = +prompt ('insert the value of x1', 0);
    x2 = +prompt ('insert the value of x2', 0);

    console.log('y1: ' +y1);
    console.log('y2: ' +y2);
    console.log('x1: ' +x1);
    console.log('x2: ' +x2);

    k = (y1 - y2) / (x1 - x2);
    b = y2 - k*x2

    console.log('k: ' + k);
    console.log('b: ' + b);
    console.log('y = ' + k + 'x + ' + b);

