let days = document.getElementById("num").value
let carType = document.getElementById("type").value
let costShow = document.getElementById("cost")

function showCost(){
    if(carType == "Economy"){
        costShow.innerText = "Cost : "+ 4000*days;
    }
    else if(carType == "Midsize"){
        costShow.innerText = "Cost : "+ 10000*days;
    }
    else{
        costShow.innerText = "Cost : "+ 20000*days;
    }
}

