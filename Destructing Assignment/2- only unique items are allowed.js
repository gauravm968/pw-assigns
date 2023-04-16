function removeDuplicates(numbers){
    let set = new Set(numbers);
    return set;
}

let numbers = [2,3,5,2,6,7,5,2,1,3];

let uniqueSet = removeDuplicates(numbers);

console.log([...uniqueSet])   