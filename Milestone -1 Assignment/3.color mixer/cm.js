const color1 = document.getElementById("c1")
const color2 = document.getElementById("c2")
const cm = document.getElementById("color-mix")

function colmix(){
    switch(color1.value){
        case "red":
            if(color1.value == "red" && color2.value == "blue"){
                cm.style.backgroundColor = "purple";
            }
            else if(color1.value == "red" && color2.value == "yellow"){
                cm.style.backgroundColor = "orange";
            }
            break;
        case "blue":
            if(color1.value == "blue" && color2.value == "red"){
                cm.style.backgroundColor = "purple";
            }
            else if(color1.value == "blue" && color2.value == "yellow"){
                cm.style.backgroundColor = "green";
            }
            break;
        case "yellow":
            if(color1.value == "yellow" && color2.value == "red"){
                cm.style.backgroundColor = "orange";
            }
            else if(color1.value == "yellow" && color2.value == "blue"){
                cm.style.backgroundColor = "green";
            }
            break;
        default: 
            alert("Invalid color combination");
    }
}