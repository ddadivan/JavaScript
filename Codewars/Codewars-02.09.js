// Create a function that returns the CSV representation of a two-dimensional numeric array.

let toCsvText = (array) => {
    return array.map(list => list.join(',')).join('\n')
}

console.log(toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]));


//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
let countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
        val += `${i} sheep...`;
    }
    return val;
}
console.log(countSheep(0));
console.log(countSheep(1));


//For every good kata idea there seem to be quite a few bad ones!
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.
let well = (x) => {
    switch (x.filter(i => i === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));


// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
let flickSwitch = (arr) => {
    let flick = true

    return arr.map(item => item === 'flick'? flick = !flick: flick)
}
console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
