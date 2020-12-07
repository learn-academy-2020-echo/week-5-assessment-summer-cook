// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//this will use .map
//we will need to map over the string and change specific letters
//first we need to split the string into an array so we can map over it
//at the end will will need to rejoin the array into the final word for the output

const codedMessage = (string) => {
    return string.split("").map(value => {
        if (value === "a"){
            return "4"
        } else if (value === "e") {
            return "3"
        } else if (value === "i") {
            return "1"
        } else if (value === "o") {
            return 0
        } else {
            return value
        }
}).join("")
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))




// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//this will use .filter since it will take in an array and filter out the words that do not contain the letter a
//we can use the built in method .includes()

const filterForAs = (array) => {
    return array.filter(value => {
        if (value.includes("a") || value.includes("A")){
            return value
        }
    })
}

console.log(filterForAs(arrayOfWords))




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true


// //this function will map over the array and check the values at each index. we will need to have the values occur either 2 or 3 times 
// //we can set variables for the numbers that will make up the array of values.
// // value1 != value2
// // value1 occurs 3 times
// // value2 occurs 2 times
// //may need to set initial starting counts for value1 & value2 and then count up from there

// const fullHouse = (array) => {
//     //set the initial values for the counts to make up the pair and 3 of a kind. The pair will have to reach a count of 2 and the 3 of a kind will have to reach a count of 3
//     let possiblePair = 0
//     let possible3OfAKind = 0
//     let value1 =
//     let value2 =
//     value1 != value2
//     //map over the array to check if the value also exists at every other value in the array.
//     //If it does, add one to the 3 of a kind variable for each time it occurs in the array.
//     array.map(value => {
//         if (possible3OfAKind.indexOf(value) === -1){
//             return possible3OfAKind++
//         } else if (possiblePair.indexOf(value) === -1) {
//             return possiblePair++
//         }
//         //the main issue that i see here is that there is not a way to check if the values are the same. in cards there is no way for all 5 values to be the same because there are only 4 of each card. 
//     })
//     if (possible3OfAKind === 3 && possiblePair === 2){
//     return "Full House!"
//     } else {
//         return "Not a full house try again"
//     }
// }

// i ran into the issue where I wanted to create a function that could check this for ANY value but it was hard to do unless you know the values you want to check for. 



// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false

// //arrays of cards? i feel like i might need these?
// let card1 = ["A", 2, 3, 4, 5, 6, 7, 8,  9, 10, "J", Q, K]
// let card2 = ["A", 2, 3, 4, 5, 6, 7, 8,  9, 10, "J", Q, K]


const fullHouse = (array) => {
    //set variables for some empty arrays where we will push the values if they are duplicates.
    let firstCardArray = []
    let secondCardArray = []
    let thirdCardArray = []
    let fourthCardArray = []
    //map over the array and take the value as an argument
    array.map(value => {
        //if the value is the first value in the array or is equal to the first value in the array,
        if(value === array[0]){
            //push it to firstCardArray so we can keep count of how many times it occurs in the hand
            return firstCardArray.push(value)
        //if the value does not equal the first value in the array, if it equals the second value in the array or if it is the same as the second value in the array
        }else if((value === array[1]) && (value != array[0])){
            //push it to the secondCardArray so we can then count the number of times it occurs
            return secondCardArray.push(value)
        //if the value does not equal the first value in the array, if it is a new value and equals the third value in the array or if it is the same as the third value in the array
        }else if((value === array[2]) && (value != array[0])) {
            return thirdCardArray.push(value)
        //do the same thing for the 4th value
        }else if((value === array[3]) && (value != array[0])){
            return fourthCardArray.push(value)
        }
    })
    //if the lengths of 2 of the arrays are 2 & 3 then the hand will be a full house.
    if((firstCardArray.length === 2 && secondCardArray.length === 3) ||
        (firstCardArray.length === 3 && secondCardArray.length === 2) ||
        (secondCardArray.length === 2 && thirdCardArray.length === 3) || 
        (secondCardArray.length === 3 && thirdCardArray.length === 2) ||
        (firstCardArray.length === 2 && thirdCardArray.length === 3)  ||
        (firstCardArray.length === 3 && thirdCardArray.length === 2)  ||(firstCardArray.length === 2 && fourthCardArray.length === 3) ||
        (firstCardArray.length === 3 && fourthCardArray.length === 2) ||
        (secondCardArray.length === 2 && fourthCardArray.length === 3) || 
        (secondCardArray.length === 3 && fourthCardArray.length === 2) ||
        (fourthCardArray.length === 2 && thirdCardArray.length === 3)  ||
        (fourthCardArray.length === 3 && thirdCardArray.length === 2)) {
        return "You got a full house!"
    } else {
        return "not a full house you suck at poker"
    }
}
console.log("Hand 1")
console.log(fullHouse(hand1))
console.log("Hand 2")
console.log(fullHouse(hand2))
console.log("Hand 3")
console.log(fullHouse(hand3))
console.log("Hand 4")
console.log(fullHouse(hand4))
console.log("Hand 5")
console.log(fullHouse(hand5))
console.log("Hand 6")
console.log(fullHouse(hand6))
