// 1. Напишіть функцію, яка приймає два числа і повертає їх суму.

function calc(a, b) {
    return a + b;
}
calc(1,5);

// 2. Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

function changeText(str) {
    return str.toUpperCase();
}

changeText('Hello, Dmytro')

// 3. Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.

function changeNum(arr) {

    let arrNum = []

    for (let item of arr) {
        arrNum.push(item * 2);
    }

    return arrNum;

}

changeNum([2, 3, 7, 8]);
