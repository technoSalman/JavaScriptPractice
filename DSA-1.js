//Arrays
const arr = [2,4,"dfsdfs", "34"];
let new_arr = arr.filter((item) => {
    if(typeof(item) == 'number')
    return item;
})

arr.splice(0,3);

console.log(arr);

