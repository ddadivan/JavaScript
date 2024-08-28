
let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved!'), 2000)
})
newPromise.then( data => console.log(data));


let secondPromise = new Promise((resolve, reject) => {
    reject(new Error('Promise rejected!'))
})

secondPromise.then().catch((err) => console.log('Promise rejected!'))
