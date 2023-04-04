const n1 = document.getElementById("num1")
const n2 = document.getElementById("num2")
const o = document.getElementById("oper")
const result = document.getElementById("res")
// const e = document.getElementById("enter")

function ans(){
    switch(o.value){
        case "+":
            result.innerText = Number(n1.value) + Number(n2.value);
            break;
        case "-":
            result.innerText = Number(n1.value) - Number(n2.value);
            break;
        case "*":
            result.innerText = Number(n1.value) * Number(n2.value);
            break;
        case "/":
            result.innerText = Number(n1.value) / Number(n2.value);
            break;
        default:
            alert("Enter operator between Numbers!");
            break;
    }
}