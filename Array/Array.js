// 1. Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.

let arr = ["Mike", "John", "Sara"];

arr.push('Dmytro');

console.log(arr);

// 2. Видаліть перший елемент масиву і виведіть його.
arr.shift();
console.log(arr);

// 3. Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"].

let useIndex = arr.findIndex((item) => item === 'John')

console.log(useIndex);
