// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [
    ["John", 23],
    ["cat", 2]
];

// Only change code below this line.

myArray.push(["dog", 3]);

//-----------------------------------------------------------------------------

// Example
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [
    ["John", 23],
    ["cat", 2]
];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

//-----------------------------------------------------------------------------

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

//-----------------------------------------------------------------------------

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();

// Only change code below this line.

myArray.unshift(["Paul", 35]);

//-----------------------------------------------------------------------------

var myList = [];

myList = [
    ["item-1", 1],
    ["item-2", 2],
    ["item-3", 3],
    ["item-4", 4],
    ["item-5", 5]
];

//-----------------------------------------------------------------------------

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
    console.log("Hello World!");
}
reusableFunction();

//-----------------------------------------------------------------------------

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(1, 2);

//-----------------------------------------------------------------------------

// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//-----------------------------------------------------------------------------

var myVar;

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;
    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

//-----------------------------------------------------------------------------

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear = "Pants";

    // Only change code above this line
    return outerWear;
}

myOutfit();

//-----------------------------------------------------------------------------

// Example
function minusSeven(num) {
    return num - 7;
}

// Only change code below this line

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(10));

//-----------------------------------------------------------------------------

// Example
var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive() {
    sum += 5;
}

// Only change code above this line
var returnedValue = addFive();

//-----------------------------------------------------------------------------

// Example
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

//-----------------------------------------------------------------------------

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var item = arr.shift(item);
    return item; // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//-----------------------------------------------------------------------------

function welcomeToBooleans() {

    // Only change code below this line.

    return true; // Change this line

    // Only change code above this line.
}

//-----------------------------------------------------------------------------

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";


    // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

//-----------------------------------------------------------------------------

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testEqual(10);

//-----------------------------------------------------------------------------

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);

//-----------------------------------------------------------------------------

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

//-----------------------------------------------------------------------------


// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);