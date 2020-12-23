/* 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод. */


       var Calculator = {
        sum: function (a, b) {
            var result = a + b;
            document.write(result);
        },
        sub: function (a, b) {
            var result = a - b;
            document.write(result);
        },
        mul: function (a, b) {
            var result = a * b;
            document.write(result);
        },
        div: function (a, b) {
            var result = a / b;
            document.write(result);
        },
    }

    var a = +prompt("Введіть перше число");
    var sign = prompt("Введіть арифметичний символ");
    var b = +prompt("Введіть друге число");
    if (isNaN(a) || isNaN(b)) {
        document.write("Error!");
        }

    if (sign == "+") {
        Calculator.sum(a, b);
    } else if (sign == "-") {
        Calculator.sub(a, b);
    } else if (sign == "*") {
        Calculator.mul(a, b);
    } else if (sign == "/") {
        Calculator.div(a, b);
    } else {
        document.write("Error!");
    }