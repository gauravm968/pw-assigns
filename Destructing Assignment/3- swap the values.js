function swap(x,y){
    [x,y] = [y,x];
    return [x,y];
}

let x = 5;
let y = 10;

console.log("Before swapping x and y value : ",x,y);
let swappedVal = swap(x,y);

console.log("After swapping : ",...swappedVal);