/* 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
Параметр для сортировки принимается от пользователя.
После выполнения функции — вывести информацию о сотрудниках.
 */



/* var stat = [
    pers1 = {
        name: "john",
        sName: "smith",
        age: "34",
        occupation: "director",

    },
    pers2 = {
        name: "phil",
        sName: "cassidy",
        age: "43",
        occupation: "programmer",

    },
    pers3 = {
        name: "tom",
        sName: "vercetti",
        age: "35",
        occupation: "manager",

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

var param = prompt("Enter one of the next parameters (name, sName, age, salary)");

     function sortPeople(param) {
         if (param === "name") {
             stat.sort( function()  */