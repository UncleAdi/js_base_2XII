//1-------------------

function convertToF(celsius) {
    let fahrenheit=(9/5)*celsius+32;
    return fahrenheit;
  }
  
  convertToF(30);

//2-----------------
function reverseString(str) {
    var resultStr = "";
    var val = Array.from(str);
    for (var i = str.length - 1; i >= 0; i--) {
        resultStr += val[i];
    }

    return resultStr;
};

console.log(reverseString("hello"));

//3---------------------------------------------

function factorialize(num) {
    if (num < 2)
        return 1;

    return num * factorialize(num - 1);
}

console.log(factorialize(5));

//4----------------------------------

function findLongestWordLength(str) {
    var words = str.split(' ');
    var len = 0;

    words.forEach(function (word) {
        if (word.length > len) {
            len = word.length;
        }
    });

    return len;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//5------------------------------------------------------------------------------

const largestOfFour = arr => {
    const reducer = (acculumator, currentValue) => Math.max(currentValue, acculumator);

    let result = arr.map(subArray => subArray.reduce(reducer));
    return result;
}

console.log(largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));

//6--------------------------------

const confirmEnding = (str, target) => {
    let regexWithVarData = `${target}$`;
    let regex = new RegExp(regexWithVarData);
    console.log(regex);
    return regex.test(str);
}
console.log(confirmEnding("Bastian", "n"));

//7--------------------------------------------------------

const repeatStringNumTimes = (str, num) => {
    if (num <= 0)
        return "";
    return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("*", 3));

//8------------------------------------------------------

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        str = str.substring(0, num);
        //sol 2 str=str.slice(0,num);
        str += "...";
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//9-------------------------------------------------------------------

const findElement = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]))
            return arr[i];
    }
    return undefined;
}
console.log(findElement([1, 20, 3, 5], num => num % 5 === 0));

//10-----------------------------

function booWho(bool) {
    return typeof bool == 'boolean';
}

console.log(booWho(true));

//11---------------------------------------

const titleCase = (str) => str.toLowerCase().replace(/(^|\s)\w/g, (L) => L.toUpperCase());

console.log(titleCase("I'm a little tea pot"));

//12-------------------------------------------------

const frankenSplice = (arr1, arr2, n) => [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

console.log(frankenSplice([1, 2, 3], [4, 5, ], 1));

//13------------------------------------------------------------

const bouncer = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(bouncer(["a", "b", "c"]));

//14------------------------------------------------

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let index = -1;
    if (arr.length <= 0)
        return 0;
    arr.sort((presentVal, nextVal) => presentVal - nextVal);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            index = i;
            break;
        }
        if (index == -1)
            index = arr.length;

    }
    return index;
}

console.log(getIndexToIns([], 1));

//15--------------------------------------------------------------------

function mutation(arr) {
    let flag = 0;
    let resultArr = arr[1].toLowerCase().split('').filter(x => arr[0].toLowerCase().indexOf(x) < 0 ?
        false : true);

    return resultArr.length === arr[1].length;
}

console.log(mutation(["hello", "hey"]));

//16--------------------------------------------------------------------------

function chunkArrayInGroups(arr, size) {
    let result=[];
    let tempArr=[];
    for(let i=0;i<arr.length;i=i+size){
      tempArr=arr.slice(i,i+size);
     
      result.push(tempArr);
    }
    return result;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));