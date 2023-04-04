function checkPass(){
    const p1 = document.getElementById("pw1")
    const p2 = document.getElementById("pw2")
if(p1.value == "" || p2.value == ""){
    alert("Fill the password!")
    return
}
if(p1.value == p2.value){
    alert("Password Matched, Password validation successful.")
    console.log(p1.value);
    return
}
else{
    alert("Password didn't Match, Password validation unsuccessful.")
    console.log(p1.value)
    console.log(p2.value)
    return
}
}


