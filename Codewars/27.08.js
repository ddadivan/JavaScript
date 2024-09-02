// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
let descendingOrder = (n) => {

    return +n.toString().split('').sort().reverse().join();
}

console.log(descendingOrder(123456789));


//Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

let litres = (time) => {
    return Math.floor(time * 0.5);
}

console.log(litres(11.8));


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = (l , w) => {
    if ( l === w) {
        return l * w;
    } else {
        return l + l + w + w;
    }
};
console.log(areaOrPerimeter(6, 10));


// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
let friend = (friends) => {
    return friends.filter((item) => item.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))


// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
let findNeedle = (haystack) => {
    let index = haystack.indexOf('needle')

    return `found the needle at position ${index}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));


// Implement a function that returns the minimal and the maximal value of a list (in this order).
let getMinMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)];
};
console.log(getMinMax([2, 1]));
