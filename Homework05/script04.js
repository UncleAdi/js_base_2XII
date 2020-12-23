/* 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках. */

var stat = [
    pers1 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),

    },
    pers2 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),

    },
    pers3 = {
        name: a = prompt("Введіть ім'я"),
        sName: b = prompt("Введіть прізвище"),
        age: c = prompt("Введіть вік"),
        occupation: d = prompt("Введіть посаду"),

    }
]

function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "director":
                arr[i].salary = 3000;
                break;
            case "manager":
                arr[i].salary = 1500;
                break;
            case "programmer":
                arr[i].salary = 2000;
                break;
            default:
                arr[i].salary = 1000;
        }
    }
}

addSalary(stat);

for (var i = 0; i < stat.length; i++) {
    document.write("First name: " + stat[i].name + "<br>");
    document.write("Surname: " + stat[i].sName + "<br>");
    document.write("Age: " + stat[i].age + "<br>");
    document.write("Occupation: " + stat[i].occupation + "<br>");
    document.write("Salary: " + stat[i].salary + "<br><br>");
};