const arr = [2,3,4,6,3,7,8,9];

//arr.filter((item) =>{
//    console.log(item);
    // it automatically runs a loop to print all the elements of array
//})

let result = arr.filter((item) =>{
    return item === 3
    // it will filter all the 3's and return them in an array
})
console.log(result);
    