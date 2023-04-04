let paragraph = document.getElementById("para")

let text = paragraph.innerText.split(" ")   //.innerHTML.split(" ")

for(let i=0; i<text.length; i++){
    let word = text[i];

    if(word.length > 8){
        text[i] = "<span style='background-color: yellow'>"+ text[i] +"</span>";
    }
}

paragraph.innerHTML = text.join(" ");