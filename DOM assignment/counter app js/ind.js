//getting the html element
const decrementbtn = document.getElementById("decrement");
const incrementbtn = document.getElementById("increment");
const resetbtn = document.getElementById("reset");
const disvalue = document.getElementById("displayvalue");

//for decrement button click
decrementbtn.addEventListener("click", () => {
    const value = Number(disvalue.innerText);
    if(value > 0){
        disvalue.innerText = value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

//for increment button click
incrementbtn.addEventListener("click", () => {
    const value = Number(disvalue.innerText);
    if(value >= 10){
        alert("10+ values not allowed");
    }
    else{
        disvalue.innerText = value+1;
    }
});

//for reset button
resetbtn.addEventListener("click", () => {
    disvalue.innerText = 0;
})