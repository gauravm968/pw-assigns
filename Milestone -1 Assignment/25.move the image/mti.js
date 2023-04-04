let img = document.getElementById("container");

let x = 0;
let y = 0;

img.style.top = y + "px";
img.style.left = x + "px";

document.addEventListener("keydown" , (event) =>{
    switch(event.key){
        case "ArrowUp":
            y -= 10;
            img.style.top = y + "px";
            break;
        case "ArrowDown":
            y += 10;
            img.style.top = y + "px";
            break;
        case "ArrowLeft":
            x -= 10;
            img.style.left = x + "px";
            break;
        case "ArrowRight":
            x += 10;
            img.style.left = x + "px";
            break;
    }
})