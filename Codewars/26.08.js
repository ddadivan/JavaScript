// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    return arr1.concat(arr2).reduce((a, b) => a + b)

}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));



//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
    return words.splice(',').join(' ');
};
console.log(smash(["hello", "world"]));



// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum (numbers) {
    return numbers.length ? numbers.reduce((acc, cur) => acc + cur) : 0
};
console.log(sum([1, 5.2, 4, 0, -1]));


//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0.
// The limit will always be higher than the base.
function findMultiples(integer, limit) {
    //your code here

    let arr = [];

    for (let i = 1; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i)
        }
    }

    return arr;

}

console.log(findMultiples(4, 27));
