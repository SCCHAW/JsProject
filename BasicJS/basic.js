// A test for running JS in VS code
const word = "hello world"
const isJohnSpeeding = true
const highestStudentMark = 98
const isHighestMark = false 

function checkMark (grade) {
  
    let result = ""
      if (grade <= 40  ){
          result = "C"
      } else if (grade <= 39){
          result = "F"
      } else if (grade = 45){
        result = "b"
      } else {
          result = "Grade A"
      }
      return result
  }
  console.log(checkMark(45))

// Example 1 
var mySen = "I come first. " + "I come second.";
console.log(mySen)

// Example 2
var mySentence = "I come first. " ;
mySentence += "I come second.";
console.log(mySentence)

//Example 3
var myName = "Sweeney";
var myStr = "Hello, my name is " + myName + " , how are you ? " ;
console.log(myStr)

//Ex 4
var myAd = "amazing";
var mySen1 = "The game is ";
mySen1 += myAd;
console.log(mySen1)

//Ex 5 - finding length of string  
var fisrtNameLength = 0;
var firstName = "James";
var fisrtNameLength = firstName.length;
console.log(fisrtNameLength)

//Ex 6 - finding letter of string 
var fisrtNameLetter = "";
var firstName1 = "kather";
var fisrtNameLetter = firstName1[0];
console.log(fisrtNameLetter)

//Ex 7 - finding letter of string 
var firstName1 = "Becky";
var fisrtNameLetter = firstName1[firstName1.length - 1];
console.log(fisrtNameLetter)

//Ex 8 - function 
function wordBlanks (myNoun , myAdj ,myVerb , MyAdv){
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb  + " to the store " + MyAdv + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))
console.log(wordBlanks("cat", "small", "go", "quietly"))

//Ex 9 - arrays
var myArray = ["James", 1] 
console.log(myArray)

//nested arrays
var myArray1 = [["Jake", 12],["Cody", 56]]
console.log(...myArray1)

var myArray2 = [30,20 ,34]
var myData = myArray2[1]
console.log(myData)

//modified arrays 
var myArray3 = [12, 4, 51, 28, 35]
myArray3[3] = 888
console.log(myArray3)

//access multi-demension array
var myArray4 = [[1,4,6], [23,45,11], [32,88,65]]
var myData2 = myArray4[0] + "," + myArray4[1][1]
console.log(myData2)

// modified - push = adding item into array - final element
var ourArray = ["Stimpson", "J", "cat"]
ourArray.push(["happy", "joy"])
console.log(...ourArray)

//modified - pop = remove items in the array - final element
var ourArray1 = [1, 2, 3]
var removedFromArray1 = ourArray1.pop()
console.log(ourArray1)

//modified - shift = remove items in the array - first element
var ourArray2 = [1, 2, 3]
var removedFromArray2 = ourArray2.shift()
console.log(ourArray2)

// modified - unshift = adding item into array - first element
var ourArray3 = ["A", "B", "C"]
ourArray3.unshift("D")
console.log(ourArray3)

// array - list 
var shoppingList = [["coke", 12], ["watermelon", 1], ["cereal", 3], ["tomato", 4]]
console.log(shoppingList[0])

// Ex 10 - function 
function ourReuseableFunction () {
    console.log("Heyya , world")
}
ourReuseableFunction();

//arguments 
function functionWithArgs (a, b){
    console.log(a - b)
}
functionWithArgs(10, 5);

function functionWithArgs1 (a, b){
    console.log(a + b)
}
functionWithArgs1(10, 5);

// Ex 11 - if statement
function testEqual (val){
    if (val == 12){
        return "Equal"
    }
    return "Not Equal"
}
console.log(testEqual(10))

// and or operators
function testAndOr (val){
    if (val >= 10){
        return "10 or more than 10"
    }
    return "less than 10"
}
console.log(testAndOr(12))

function testAndOr1 (val){
    if (val < 10){
        return "less than 10 "
    }
    return "more than 10"
}
console.log(testAndOr1(1))

// else statement
function testElse (val){
    var result = ""

    if (val > 5){
        result = "Bigger than 5"
    } else {
        result = "5 or Smaller"
    }
    return result
}
console.log(testElse(10))

// else if statement
function testElseIf (val){
    if (val > 10){
        return "Greater than 10"
    } else if (val < 5){
        return "Smaller than 5"
    } else {
        return "Between 5 and 10"
    }
}
console.log(testElse(7))

//logical order in if else statement
function orderMyLogic (x){
    if (x < 5){
        return "Less than 5"
    } else if (x < 10){
        return "Less than 10"
    } else {
        return "Greater than or equal to 10"
    }
}
console.log(orderMyLogic(3))

// chaining if else statement 
function testSize (n){
    if (n < 5){
        return "Tiny"
    } else if (n < 10){
        return "Small"
    } else if (n < 15){
        return "Medium"
    } else if (n < 20){
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(7))

