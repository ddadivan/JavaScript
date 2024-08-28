// 1. Напишіть функцію, яка приймає два числа і повертає їх суму.

let calc = (a, b) => a + b;
calc(1,5);

// 2. Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

let changeText = (str) => str.toUpperCase();

changeText('Hello, Dmytro')

// 3. Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.

let changeNum = (arr) => {

    let arrNum = []

    for (let item of arr) {
        arrNum.push(item * 2);
    }

    return arrNum;

}

changeNum([2, 3, 7, 8]);
