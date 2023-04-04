// const form = document.querySelector('form')
const formbtn = document.getElementById("btn")
const eml = document.getElementById("email")
const pass = document.getElementById("pass")
const result = document.getElementById("res")

// form.addEventListener("submit", (event) =>{
formbtn.addEventListener("click", (event) =>{
    event.preventDefault();

    let emailInpValue = eml.value.trim();
    let passInpValue = pass.value.trim();

    if(emailInpValue.includes('@') && passInpValue.length >= 8){
        result.innerText = "Valid email and password!";
        result.style.color = "darkgreen";
    }
    else{
        result.textContent = "Invalid email and password!";
        result.style.color = "red";
    }

});