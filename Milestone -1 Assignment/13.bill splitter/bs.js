function billSplitter(dishCost, noOfPeopleSharing){
    let tb = dishCost*noOfPeopleSharing;

    const detail = {
        totalBill: tb,
        billPaidByEach: tb/noOfPeopleSharing
    }

    return detail
}

console.log(billSplitter(300, 5))