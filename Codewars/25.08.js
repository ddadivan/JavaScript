// Messi is a soccer player with goals in three leagues:
//
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// Notes
// - The first argument can be an empty string
// - In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter){

    str.trim();

    let arrStr = str.split('');

    let sumLetter = 0;

    for (let item of arrStr) {
        if (item === letter) {
            sumLetter++
        }
    }

    return sumLetter;
}

console.log(strCount('hello', 'l'));


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {

    if (n < 0 || m < 0) {
        return 0;
    }

    return n * m;

}


console.log(paperwork(-5, -5));


// Write a function to split a string and convert it into an array of words.
function stringToArray(string){
    return string.split(' ');
}

console.log(stringToArray("Robin Singh"));


//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return number % 2 === 0 ? number *= 8 : number *= 9
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));



// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(days) {

    let costDays = days * 40;

    if ( days >= 7 ) {
        return costDays -= 50;
    }

    if (days >= 3) {
        return costDays -= 20;
    }

    return costDays;
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(5));
console.log(rentalCarCost(8));


//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter( item => !geese.includes(item))
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a,b) {
    return String(+a + +b)
}

console.log(sumStr("4", "5"));



// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument.
// This function must return another function, which takes a single integer as an argument and returns a new array.
//
// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiplyAll(arr) {

    let newArr = [];

    return function(num) {

        for (item of arr) {
            newArr.push(item * num)
        }

        return newArr;

    }

}

console.log(multiplyAll([1, 2, 3])(1));


//A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
function hero(bullets, dragons){
    return bullets >= (dragons * 2)  ? true : false
}

console.log(hero(10, 5));
console.log(hero(7, 4));


//Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
var summation = function (num) {
    let sum = 0;

    for ( var i = 1; i <= num; i++) {
        sum += i
    }

    return sum

}
console.log(summation(8));
