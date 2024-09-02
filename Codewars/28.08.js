
// Your task is to create a function that does four basic mathematical operations.
//
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

let basicOp = (operation, value1, value2) =>{

    switch(operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 0;
    }
}
console.log(basicOp("+", 4, 7));


//Find the last element of the given argument(s).
// If a single argument is passed and is a list/array or a string, return its last element.
// It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
let last = (num) => {

    if (arguments.length > 1) {
        return arguments[arguments.length - 1]
    }

    if (Array.isArray(num)) {
       return num.pop();
    } else if (typeof num === 'string') {
        return num.charAt(num.length - 1);
    }

    return num;

}

console.log(last('123'));
console.log(last('a', 'b', 'c'));
console.log(last(1, 2, 3));



let createArrayOfTiers = (num) => {

    let result = [];
    let strNum = String(num)
    for (let i = 0; i < strNum.length; i++ ) {
        result.push(strNum.slice(0, i + 1))
    }
    return result;
}
console.log(createArrayOfTiers(2017));
