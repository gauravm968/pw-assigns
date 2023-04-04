let input = document.getElementById("inp");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click" ,() => {
    let li = document.createElement("li");
    li.textContent = input.value.trim();
    if(input.value != ""){
        list.appendChild(li);
        input.value = "";
    }
});