/* 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя. */


function calc() {
    var operand1 = +prompt("Insert the first value ");
    var sign = prompt("Insert one of the next signs + - * /");
    var operand2 = +prompt("Insert the second value ");

    if (sign == "+") {
        console.log(operand1 + operand2);
    } else if (sign == "-") {
        console.log(operand1 - operand2);
    } else if (sign == "*") {
        console.log(operand1 * operand2);
    } else if (sign == "/") {
        console.log(operand1 / operand2);
    } else {
        console.log("Error!");
    };
}

calc();