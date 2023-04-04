let customer = {
    name: "Ramesh",
    balance: 5000
};

function deposit(amount){
    customer.balance += amount;
    console.log("Now your balance is : ",customer.balance);
}

function withdrawal(amount){
    if(customer.balance >= amount){
        customer.balance -= amount;
        console.log("Now your balance is : ",customer.balance);
    }
    else{
        console.log("In your account is not insufficient balance.");
    }
}

console.log(deposit(300));
console.log(withdrawal(2000));