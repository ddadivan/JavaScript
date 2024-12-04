// Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.
// Викличте цю функцію і виведіть результат в консоль.
// Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.

async function helloWorld() {
     let text = await 'Hello world';
    console.log(text);
}

helloWorld()


async function secondFunk() {
    try {
        let response = await fetch('http://file.com')
        let data = await response.json();
    } catch (err) {
        console.log( new Error('Error'));
    }
}
secondFunk();
