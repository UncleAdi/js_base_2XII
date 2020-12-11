/* 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3. */


var a = +prompt("Insert the leigth of array");
var array = new Array(a);
if (a != NaN && a != undefined && a != null) {
    console.log(array);
} else {
    console.log("You have to enter a number!");

};