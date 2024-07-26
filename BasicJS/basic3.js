// boolean values - fuction
function isLess (a,b){

    if (a < b){
        return true
    } else {
        return false
    }
}
console.log(isLess(10, 15))

// return early - function 
function abTest (a,b){
    if (a < 0 || b < 0){
        return undefined
    }
//     return Math.round(Math.pow(math.sqrt(a) + Math.sqrt(b), 2))
  }
console.log(abTest(2,2))

// counting card 
var count = 0
function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "hold"
    if (count > 0){
        holdbet = "bet"
    }

    return count + " " + holdbet;

}
cc(2); cc("K"); cc(10); cc("K"); cc("A")
console.log(cc(4))

//object - //properties:values
var ourDog = { 
    "name": "Camp",
    "legs": 4,
    "tails": 1,
    "friends": ["kate"]
};

//dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatValue = testObj.hat;
var shirtValue = testObj.shirt
console.log(hatValue, shirtValue)

// bracket notation 
var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj2["an entree"];
var drinkValue = testObj2["the drink"];
console.log(entreeValue, drinkValue)

// access object properties with variables
var testObj3 = {
    12: "Nam",
    16:"Mona",
    19: "Unitas"
};

var playerNum = 16;
var player = testObj3[playerNum];
console.log(player)

// update object properties - use notation to change 
var ourDog1 = { 
    "name": "cody",
    "legs": 4,
    "tails": 1,
    "friends": ["jenny"]
};

ourDog1.name = "james"
console.log(ourDog1)

// add new properties to object - use notation/ bracket to add
var ourDog2 = { 
    "name": "cody",
    "legs": 4,
    "tails": 1,
    "friends": ["jenny"]
};

ourDog2.bark = "woo"
ourDog2["food"] = "bread"
console.log(ourDog2)

//delete properties from object - use delete 
var ourDog3 = { 
    "name": "cody",
    "legs": 4,
    "tails": 1,
    "friends": ["jenny"]
};

delete ourDog3.friends;
console.log(ourDog3)

// using obj for lookup
function phoneticLookup (val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "echo",
        "foxtrot": "Frank"
    }
    result = lookup[val]
    return result
}
console.log(phoneticLookup("alpha"))

// testing obj for properties
var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
}

function checkObj (checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    } else {
        return "not found"
    }
}
console.log(checkObj("gift"))

//nested obj
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
}
var gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents)

// nested arrays
var myPlants = [
    {
        type : "flowers",
        list : [
            "rose",
            "tulip",
            "sunflower"
        ]
    },
    {
        type : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1]
console.log(secondTree)

//while loops
var myArray = [];

var i = 0
while (i < 5){
    myArray.push(i);
    i++
}
console.log(myArray)

//for loops 
var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i)
}
console.log(ourArray)

// odd numbers and even numbers - for loop
var ourArray1 = [];

for (var i = 0; i < 10; i+= 2){
    ourArray1.push(i)
}
console.log(ourArray1)

var ourArray2 = [];

for (var i = 1; i < 10; i+= 2){
    ourArray2.push(i)
}
console.log(ourArray2)

// count backward - for loop
var ourArray3 = [];

for (var i = 10; i > 0; i-= 2){
    ourArray3.push(i)
}
console.log(ourArray3)

// iterate through an array - for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i< ourArr.length; i++){
    ourTotal += ourArr[i]
}
console.log(ourTotal) // 9+10+11+12=42

// nesting loops 
function multiplyAll (arr){
    var product = i

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j< arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product)

//do ...while loop
var myArray1 = []
var i = 10;

do {
    myArray1.push(i);
    i++
} while (i < 5)
console.log(i,myArray1)

//random num
function randomFraction (){

    return Math.random();
}
console.log(randomFraction())

//whole num
var randomNumBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumBetween0and19)

function randomwholeNum (){
    
    return Math.floor(Math.random() * 10)
}
console.log(randomwholeNum())

//array - .map() = accepts a call back and applies that function to each element of an array, then return a new array.
const num = [1, 2, 3, 4, 5]
const squares = num.map(square)
const cubes = num.map(cube)
console.log(cubes)
console.log(squares)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

// ex 2
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

//ex 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}