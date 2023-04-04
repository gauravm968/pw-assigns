const h = document.getElementById("heading");
const btn = document.getElementById("btn");

function changeText(){
    if(h.textContent === "The most affordable learning platform"){
        h.textContent = "PW Skills";
    }
    else{
        h.textContent = "The most affordable learning platform";
    }
}