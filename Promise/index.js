// let a = 10;
// let b = 0;

// setTimeout(() => {
//     b = 10;
// },2000);
// let c = a + b;
// console.log(c);  // 10

// Using Promise
let a = 10;
let b = 0;

let waitingData = new Promise((res, rej) => {
    setTimeout(() => {
        res(30);
    }, 2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a + b)
})
