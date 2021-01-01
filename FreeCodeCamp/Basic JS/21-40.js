// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "john";
var myLastName = "smith";

//--------------------------------

var myStr = "I am a \"double quoted\" string inside \"double quoted\".";

//--------------------------------

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//--------------------------------

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end."

//--------------------------------

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";

myStr += "This is the second sentence.";

//--------------------------------

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "John";
var myStr = "My name is " + myName + " and i am well!";

//--------------------------------

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "cool";
var myStr = "Learning to code is ";
myStr += someAdjective;

//--------------------------------

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

//--------------------------------

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

//--------------------------------

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

//--------------------------------

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

//--------------------------------

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//--------------------------------

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = myNoun + " " + myVerb + " " + myAdverb + " after watching a " + myAdjective + " lion";

    // Your code above this line
    return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "run", "quickly");

//--------------------------------

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["smith", 111];

//--------------------------------

// Example
var ourArray = [
    ["the universe", 42],
    ["everything", 101010]
];

// Only change code below this line.
var myArray = [
    [1, 2],
    [3, 4]
];

//--------------------------------

// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50, 60, 70];

// Only change code below this line.
var myData = myArray[0];

//--------------------------------

// Example
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18, 64, 99];

// Only change code below this line.

myArray[0] = 45;

//--------------------------------

// Setup
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

// Only change code below this line.
var myData = myArray[2][1];

//--------------------------------