//array of objects with unitprice and quantity
let cart = [
    {
        unitPrice: 200,
        quantity: 5
    },
    {
        unitPrice: 400,
        quantity: 3
    },
    {
        unitPrice: 250,
        quantity: 8
    },
    {
        unitPrice: 320,
        quantity: 10
    }
];

let totalCost = (cart) => {
    let cost = 0;
    for(let i=0; i<cart.length; i++){
        cost += cart[i].unitPrice * cart[i].quantity;
    }
    return cost;
};

console.log(totalCost(cart))
