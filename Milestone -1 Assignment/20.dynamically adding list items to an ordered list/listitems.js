let mainList = ["Html and Semantics", "Starting with Css", "Working template"];

let btn = document.getElementById("btn");
let list = document.getElementById("list");

let i = 0;
function addListItems(){
    if(i < mainList.length){
        let newItem = document.createElement("li");
        newItem.textContent = mainList[i];
        list.appendChild(newItem);
        i++;
    }
    else{
        alert("All items have been added.");
    }
}

btn.addEventListener("click", addListItems);