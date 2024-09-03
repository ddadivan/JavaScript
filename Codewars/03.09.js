//Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

let longest = (textFirst, textSecond) => {
    // your code
    let sumArg = textFirst + textSecond;
    let result = sumArg.split("");
    result = result.sort().filter(function(element, index, array){
        return element !== array[index - 1];
    });
    return result.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
let reverse = (string) => {
    return string.split(' ').reverse().join(' ');
}
console.log(reverse('I am an expert at this'));


// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

let distinct = (arr) =>{
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(distinct([1, 1, 2]));
