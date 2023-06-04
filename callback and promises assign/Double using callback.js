function doubleArray(arr, callback) {
  // also possible using map 
  // let res = arr.map(num) => { return callback(num)}
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }
  return res;
}

const originalArray = [1, 2, 3, 4];

function callback(num) {
    return num * 2;
}

const dblArr = doubleArray(originalArray, callback);

console.log(dblArr); 