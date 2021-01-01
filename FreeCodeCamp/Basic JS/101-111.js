//101-------------------------------

function randomFraction() {

    // Only change code below this line.

    return Math.random();

    // Only change code above this line.
}

//102----------------------------------

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    // Only change code below this line.
    return Math.floor(Math.random() * 10);
}


//103----------------------------------

// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

    return Math.floor((Math.random() * (myMax - myMin + 1)) + myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

//104----------------------------------------------

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("44");

//105-------------------------------

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));

//106---------------------------------------

function checkEqual(a, b) {
    return a === b ? true : false;
}

checkEqual(1, 2)

//107--------------------------------------------

function checkSign(num) {
    return (num > 0) ? "positive" : ((num < 0) ? "negative" : "zero");
}

checkSign(10);

//108-------------------------------

function countdown(myArray, n) {
    if (n <= 0) {
        return;
    } else {
        myArray.push(n);
        countdown(myArray, n - 1);
    }
};

//109-------------------------------

function rangeOfnumbers(startNum, endNum) {
    if (startnum == endNum) {
        return [endNum];
    } else {
        return [startNum].concat(rangeOfnumbers(++startNum, endNum));
    }
};