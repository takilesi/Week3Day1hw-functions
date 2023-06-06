// difference between a function declararion and a function expression

// function 1: as declaration 

console.log("function 1: as declaration"); console.log("-------------------------"); 

const maxOfTwoNumbers = (x,y) => {
    if (x>y){
        console.log(x, " is greater than ", y); 
    }else if (y>x){
        console.log(y, " is greater than ", x);
    }else if (y=x){
        console.log(y, " is equal to ", x);
    }
};

maxOfTwoNumbers(5,9) 
maxOfTwoNumbers(5,5) 
console.log(""); 

// function 2: as expression  

console.log("function 2: as expression"); console.log("------------------------");

const maxOfThree = function(x,y,z) {
    if (x>y && x>z){
        console.log(x, " is greater than ", y); 
        console.log(x, " is also greater than ", z);
    }else if (y>x && y>z){
        console.log(y, " is greater than ", x); 
        console.log(y, " is also greater than ", z);
    }else if (z>x && z>y){
        console.log(z, " is greater than ", x); 
        console.log(z, " is also greater than ", y);
    }
}

maxOfThree(5,6,7)
maxOfThree(9,3,1)
maxOfThree(10,20,4)
console.log("");

// function 3: as declaration

console.log("function 3"); console.log("----------");

const isCharAVowel = (letter) => {
    const vowelList = ["a","e","i","o","u"]; 
    if (vowelList.includes(letter)){
        console.log(letter, " is a vowel"); 
    } else {
        console.log(letter, " is not a vowel"); 
    }
}

isCharAVowel("a")
isCharAVowel("t")
isCharAVowel("o")
console.log("");

// function 3: boolean 
console.log("function 3 boolean"); console.log("------------------");

const is_CharAVowel = (letter) => {
    const vowelList = ["a","e","i","o","u"]; 
    if (vowelList.includes(letter)){
        vowel = true; 
        console.log(letter, " is a vowel: ",vowel); 
    } else {
        vowel = false; 
        console.log(letter, " is a vowel: ",vowel); 
    }
}

is_CharAVowel("a")
is_CharAVowel("t")
is_CharAVowel("o")
console.log("");

// function 3.5

// how do I output when the input is not a vowel? 

console.log("function 3.5");  console.log("------------");

const myVowelList = ["a","e","i","o","u"]; 
const isCharAVowelArray = (letter) => {
    for(let i=0; i<myVowelList.length; i++){
        if (myVowelList[i]===letter){
            console.log(myVowelList[i], " is a vowel"); 
        } 
    }
}

isCharAVowelArray("a")
isCharAVowelArray("t")
isCharAVowelArray("o")
console.log("");

// function 4 declaration 
console.log("function 4 declaration"); console.log("----------------------");

const sumArray = (arrayInput) => {
    let sum = 0; 
    for (let i=0; i<arrayInput.length; i++){
        sum = sum + arrayInput[i] 
    }
    console.log("the sum of: ", arrayInput, " is: ", sum)
}

sumArray([4,5,6])
sumArray([20,5,200])
console.log("");

// function 4: as expression 
console.log("function 4: as expression"); console.log("-------------------------");

const sumTheArray = function (numsToAdd) {
    let sum = 0 
    for (let i=0; i<numsToAdd.length; i++){
        sum = sum + numsToAdd[i] 
    }
    return sum; 
}; 
console.log(sumTheArray([3,4,5])); 

console.log("");

// function 5: as declaration
console.log("function 5: as declaration"); console.log("--------------------------");

const multiplyArray = (numsToMult) => {
    theSum = numsToMult[0]; 
    for (let i=1; i<numsToMult.length; i++ ){
        theSum = theSum * numsToMult[i];
    }
    return theSum; 
}
console.log(multiplyArray([2,5,8,2]));
console.log("");

// function 6 expression 
// i looked this up -- levelup.gitconnected.com
console.log("function 6: as expression"); console.log("-------------------------");

const numArgs = function () {
    return arguments.length; 
}
console.log("The number of arguments passed:", numArgs(3,4,5,6)); 
console.log("");

// function 7 
console.log("function 7: as declaration"); console.log("--------------------------");
// check for palindrome 

const reverseStr = (str) => {
    let originalStr = str; 
    let resultOf = ""; 
    for (let i=str.length-1; i>=0; i--){
        resultOf = resultOf + str.slice(-1); 
        str = str.slice(0, i);
    }   
    if (originalStr == resultOf) {
        console.log("the reverse of: ", originalStr, " is: ", resultOf);
        console.log("Zoinkes! ", originalStr, " is a Palindrome!!!");
    } else {
        console.log("the reverse of: ", originalStr, " is: ", resultOf);
    }
}
reverseStr("kittycat"); 
reverseStr("racecar"); 
console.log("");

// function 8 
console.log("function 8: as expression"); console.log("-------------------------");
const longestStringInArray = function (array) {
    let newArray = []; 
    for(let i=0; i<array.length; i++){
        lengthOfStr = array[i].length; 
        newArray.push(lengthOfStr); 
    }
    console.log(newArray); 
    console.log(Math.max(...newArray)); 
}
longestStringInArray(["cat","wolf","hippopotamus"])

// function 9 

// const stringsLongerThan(anArr, num) => {
//     for ()

// }
// stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)