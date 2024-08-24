//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    // i will be an integer. Double it and return it.

    i *= 2

    return i;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep) {
    // TODO

    let counterSheep = 0;

    for (let item of sheep) {

        if (item === true) {
            counterSheep++
        }

    }

    return counterSheep;

}

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
function sayHello(name) {
    return `Hello, ${name}`
}


// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy,
// different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
function saleHotdogs(n){

    let sum = 0;

    if (n < 5) {
        sum = n * 100;
    } else if (n >= 5 && n < 10) {
        sum = n * 95;
    } else {
        sum = n * 90;
    }


    return sum
}


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    // Your code here

    let quarter = 0;

    if (month <= 3) {
        quarter = 1
    } else if (month > 3 && month <= 6) {
        quarter = 2
    } else if (month > 6 && month <= 9) {
        quarter = 3
    } else if (month > 9 && month <= 12) {
        quarter = 4
    }

    return quarter;

}


//Create a function that takes a number as an argument and returns a grade based on that number.
function grader(score) {

    let grade = '';

    if (score >= 0.9) {
        grade = 'A'
    } else if (score >= 0.8 && score < 0.9) {
        grade = 'B'
    } else if (score >= 0.7 && score < 0.8) {
        grade = 'C'
    } else if (score >= 0.6 && score < 0.7) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade;

}


// This function should test if the factor is a factor of base.
//
// Return true if it is a factor or false if it is not.
//
// About factors
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
//
// Note: base is a non-negative number, factor is a positive number.
function checkForFactor (base, factor) {
    // code here

    return base % factor === 0 ? true : false
}
