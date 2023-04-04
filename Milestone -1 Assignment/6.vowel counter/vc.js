const n = document.getElementById("name")
const button = document.getElementById("btn")
const show = document.getElementById("res")

button.addEventListener("click" , () =>{
    let count = 0;
    for (let e of n.value.toLowerCase()) {          
       if(e == 'a' || e == 'i' || e == 'o' || e == 'u' || e == 'e'){
            count++;
        }
    }
    show.innerText = count;
});
