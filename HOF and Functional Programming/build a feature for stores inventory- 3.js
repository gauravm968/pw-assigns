const itemsPriceInDollers = [
    { 
        itemName: "Wild stone",
        price: 30
    },
    {
        itemName: "loreal",
        price: 43
    },
    {
        itemName: "Dove",
        price: 35
    },
    {
        itemName: "Mama Earth",
        price: 60
    }
];

let itemsPriceInRupee = itemsPriceInDollers.map( (item)=>{
    return {
        itemName: item.itemName,
        price: item.price*80
        };
});

console.log(itemsPriceInRupee);