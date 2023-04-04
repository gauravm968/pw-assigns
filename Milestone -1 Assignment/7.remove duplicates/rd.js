let cart = ["laptop", "mobile", "headphone", "laptop", "headphone"]
//1st 
const final = [];

for(let i=0;i<cart.length;i++){
    //final.indexOf(cart[i])  , return -1 if element not exist then add element in final
    if(final.indexOf(cart[i]) === -1)
        final.push(cart[i])
}
console.log(final)

//2nd way 
// let finalCart = new Set(cart);
// console.log(finalCart)