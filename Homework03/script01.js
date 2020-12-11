/* 1. Сделать собственные примеры методов применяемых для массивов. */

//Join

var words = ["some", "short", "array"];

document.write(words);

console.log("before: " + words);

var changedArray = words.join(" ");

document.write("<br/><br />");

document.write(changedArray);

console.log("after:" + changedArray);

changedArray = words.join("<br />");

document.write("<br/><br />");

document.write(changedArray);

console.log("*********************************");

//Concat

var oneTofour = ["1", "2", "3", "4"];
var fiveToseven = ["5", "6", "7"];

var oneToSeven = oneTofour.concat(fiveToseven);
console.log(oneToSeven);

console.log("*********************************");

//reverse

var numbers = [1, 2, 3, 4, 5, 6];

console.log("normal: " + numbers);

sixToone = numbers.reverse();
console.log("reversed: " + sixToone);

console.log("*********************************");

//slice

var zeroTofive = ["0", "1", "2", "3", "4", "5"];


console.log("before: " + zeroTofive);

var oneTotwo = zeroTofive.slice(1, 3);

console.log("after: " + oneTotwo);

console.log("*********************************");

//splice

var cars = ["Subaru", "Volvo", "BMW", "Ford", "Skoda", "Lexus", "Honda"];
console.log("Different cars: " + cars);

var del = cars.splice(1, 4);
console.log("European: " + del);
console.log("Japanese: " + cars);

console.log("*********************************");

//sort

var nmbrs = ["4", "2", "1", "5"];
console.log(nmbrs);
var srtd = nmbrs.sort();
console.log("sorted: " + srtd);

console.log("*********************************");

//push

var oneTozwei = [0, 1, 2];
        console.log("before: " + oneTozwei);

        console.log("leigth before: " + oneTozwei.length);

        var newLength = oneTozwei.push(3);
        console.log("after: " + oneTozwei);
        console.log("leigth after: " + newLength);