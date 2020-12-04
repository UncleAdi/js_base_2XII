/* 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя. */

var a = +prompt('Enter the first number');
var b = +prompt('Enter the second number');
var c = +prompt('Enter the third number');

if (a != c && a!=b && c != b) {
    console.log((a + b + c) / 3)
} 
    else {
        alert('Error!')
    }