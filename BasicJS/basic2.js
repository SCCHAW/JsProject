// golf code
var names = ["Hole-in-hole", "Eagle", "Birdie", "Par", "Bogie", "Double Bogie", "Go home"]
function golfScore (par, strokes){
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes >= par + 3){
        return names[6]
    } 
}
console.log(golfScore(5, 4))

// switch statement
function caseInSwitch (val){
    var answers = "";
    switch(val){
        case 1:
            answers = "alpha";
            break;
        case 2:
            answers = "beta";
            break;
        case 3:
            answers = "gamma";
            break;
        case 4:
            answers = "delta";
            break;
    }
    return answers;
}
console.log(caseInSwitch(3))

// default statement
function switchOfStuff (val){
    var answer = "";
    switch(val){
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
            answer = "No answer";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"))

// multiple
function sequentialSize (val){
    var answer1 = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer1 = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer1 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer1 = "High";
            break;
    }

    return answer1
}
console.log(sequentialSize(3))

// if else -> switch statement
function chainToSwitch (val){
    var answer2 = "";

    switch (val) {
        case "bob":
            answer2 = "Marley"
            break; 
        case 42:
            answer2 = "The answer"
            break;
        case 1:
            answer2 = "There is no #1"
            break;
        case 99:
            answer2 = "Missed me too much"
            break;
        case 7:
            answer2 = "Ate Nine"
            break;
    }
}
console.log(chainToSwitch("bob"))