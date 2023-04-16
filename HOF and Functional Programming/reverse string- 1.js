let input = "assignment";

function revStr(str){
    let result = "";
    for(let i=str.length-1; i>=0; i--){
        // result += str.charAt(i);
        result += str[i];
    }
    return result;
}
           //callback
setTimeout(() => {
    console.log(revStr(input));
}, 2000);

