// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {

        // Only Change Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

//------------------------------------------------------

function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

//------------------------------------------------------

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

//------------------------------------------------------

function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);

//------------------------------------------------------

function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

//------------------------------------------------------

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }


    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);

//67------------------------------------------------------

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }


    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);

//68------------------------------------------------------

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Change this value to test
testElse(4);

//69------------------------------------------------------

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);

//70------------------------------------------------------

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// Change this value to test
orderMyLogic(7);

//71------------------------------------------------------

function testSize(num) {
    // Only change code below this line

    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
    // Only change code above this line
}

// Change this value to test
testSize(10);

//72------------------------------------------------------

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1)
        return names[0];
    else if (strokes <= par - 2)
        return names[1];
    else if (strokes === par - 1)
        return names[2];
    else if (strokes === par)
        return names[3];
    else if (strokes === par + 1)
        return names[4];
    else if (strokes === par + 2)
        return names[5];
    else if (strokes >= par + 3)
        return names[6];


    return "Change Me";
    // Only change code above this line
}

// Change these values to test
golfScore(2, 7);

//73------------------------------------------------------

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    // Only change code above this line  
    return answer;
}

// Change this value to test
caseInSwitch(1);

//74------------------------------------------------------

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }


    // Only change code above this line  
    return answer;
}

// Change this value to test
switchOfStuff(1);

//75------------------------------------------------------

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line  
    return answer;
}

// Change this value to test
sequentialSizes(4);

//76------------------------------------------------------

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line  
    return answer;
}

// Change this value to test
chainToSwitch(1);

//77------------------------------------------------------

function isLess(a, b) {
    // Fix this code
    return a < b;
}

// Change these values to test
isLess(2, 4);

//78------------------------------------------------------

// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0)
        return undefined;
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);

//79------------------------------------------------------

var count = 0;

function cc(card) {
    // Only change code below this line
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6)
        count++;
    else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A")
        count--;

    if (count > 0)
        return count + " Bet";
    else
        return count + " Hold";

    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//80------------------------------------------------------

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
    "name": "puffy",
    "legs": 4,
    "tails": 1,
    "friends": ["watson", "kat"]


};


