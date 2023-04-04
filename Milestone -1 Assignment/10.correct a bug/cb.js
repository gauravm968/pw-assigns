function dblCartQuantities(cart){
    for(let i=0; i<cart.length; i++){
        cart[i] *= 2;
    }
    return cart;
}

let cart = [1,3,5,7,9,11,13];

const finalCart = dblCartQuantities(cart);
console.log(finalCart)