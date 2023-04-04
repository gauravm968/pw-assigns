let i = 6;
let str = "";
for(i; i>0; i--){
    for(let j=i; j>0; j--){
        str += "*";
    }
    str += "\n";
}
console.log(str);