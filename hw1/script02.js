/* 2. Обменять значения двух переменных, используя третью (буферную) переменную. */

var a = 4;
var b = 8;
var c;

console.log('first value: ');
console.log('a: ' + a, '| b: ' + b);

c = a;
a = b;
b = c;

console.log('changed value: ');
console.log('a: ' + a, '| b: ' + b);
