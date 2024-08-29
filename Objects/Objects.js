// 1. Створіть об'єкт, який представляє книгу з властивостями title, author та year.

const bookObj = {
    title: 'New book',
    author: 'Mike Holland',
    year: 2020
};

// 2. Додайте нову властивість genre до об'єкта книги.

bookObj.genre = 'historical';

console.log(bookObj);
// 3. Видаліть властивість year з об'єкта книги.
delete bookObj.genre;

console.log(bookObj);
