function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { min : min,
             max : max};
}

let arr = [7,3,5,4,6,9,8];

console.log(minMax(arr));