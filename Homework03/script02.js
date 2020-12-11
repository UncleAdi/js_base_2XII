/* 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь. */

var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
console.log("Cars before: " + cars);
var a = prompt("Enter your value:");
cars.splice(a, 0, "Ford", "Dodge", "Pontiac");
console.log("Cars after: " + cars);