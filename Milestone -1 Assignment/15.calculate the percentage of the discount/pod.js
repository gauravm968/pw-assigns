let findDiscount = (orgPrice, discountedPrice) => {
    let dis = orgPrice - discountedPrice;
    let perDiscount = (dis/orgPrice)*100;

    //toFixed(2) -> return number of digits after decimal point (2)
    return perDiscount.toFixed(2);
}

console.log(findDiscount(210, 190));