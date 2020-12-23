/* 4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение. */

var arr = [1, 2, 3, -4, 5];

function checkPositive(arr) {
        return arr > 0;
}

console.log( arr.some(checkPositive) );
