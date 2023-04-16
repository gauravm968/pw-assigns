function extractArrayElement(arr){
    let [first, second, ...rest] = arr;
    let last = rest.pop();  //remove last element and return
    return [first, second, last];
}

let arr = [3,4,5,6,7,8];

console.log(extractArrayElement(arr));