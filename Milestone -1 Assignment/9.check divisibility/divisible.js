let arr = [9,10,27,33,32,45,62,117,166,198]

for(let i=0; i<arr.length; i++){
    if(arr[i]%3 == 0){
        console.log(arr[i])
    }
    if(arr[i]%2 == 0){
        continue;
    }
}
