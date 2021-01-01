//81

// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

//82---------------

// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj["the drink"]; // Change this line

//83----------------------------------------------------------

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16; // Change this Line
var player = testObj[playerNumber]; // Change this Line

//84-------------------------------------

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";

//85----------------------------------------

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.bark = "woof-woof";

//86----------------------------------------------

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;

//87---------------------------------

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line

    var name = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = name[val];

    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("delta");

//88----------------------------------------

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    var isCheckPropPresent = myObj.hasOwnProperty(checkProp);
    if (isCheckPropPresent) {
        return myObj[checkProp];
    }
    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");

//89----------------------------------

var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Iron Maiden",
        "title": "The Best",
        "release_year": 1994,
        "formats": [
            "Tape",
            "8T",
            "LP"
        ],

    }
    // Add record here
];

//90-----------------------------------

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

//91----------------------------------------------

// Setup
var myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];

//92------------------------------------------------

//93------------------------------------------------

// Setup
var myArray = [];

// Only change code below this line.

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

//94------------------------------------------------------

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.


for (var i = 0; i < 5; i++) {
    myArray.push(i + 1);
}

//95--------------------------------------------

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 0; i < 10; i += 2) {
    myArray.push(i + 1);
}

//96---------------------

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 10; i > 0; i -= 2) {
    myArray.push(i - 1);
}

//97--------------------------------------------------

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

//98------------------------------------------------

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

//99---------------------------------------------------

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
    myArray.push(i);
    i++;
} while (i < 11);

//100--------------------------------------------------------

//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    var flag = 0;
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) {
            return "No such property";
        } else if (contacts[i].firstName !== name) {
            flag = 1;
        }
    }
    if (flag == 1)
        return "No such contact";
    // Only change code above this line
}

// Chan}ge these values to test your function
lookUpProfile("Kristian", "lastName");