const arr = [1,2,3,4,5,6,7,8,9,10]
let res = arr.filter((item) =>{
    return item %2 == 0
})
console.log(res)