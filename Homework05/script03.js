/* 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках. */

var stat = [
    pers1 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),
        show: function () {
            document.write("Ім'я: " + this.name + "<br>");
            document.write("Прізвище: " + this.sName + "<br>");
            document.write("Вік: " + this.age + "<br>");
            document.write("Посада: " + this.occupation + "<br><br>");
        }
    },
    pers2 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),
        show: function () {
            document.write("Ім'я: " + this.name + "<br>");
            document.write("Прізвище: " + this.sName + "<br>");
            document.write("Вік: " + this.age + "<br>");
            document.write("Посада: " + this.occupation + "<br><br>");
        }
    },
    pers3 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),
        show: function () {
            document.write("Ім'я: " + this.name + "<br>");
            document.write("Прізвище: " + this.sName + "<br>");
            document.write("Вік: " + this.age + "<br>");
            document.write("Посада: " + this.occupation + "<br><br>");
        }
    }
]

for (var i = 0; i < stat.length; i++) {
    stat[i].show();
}