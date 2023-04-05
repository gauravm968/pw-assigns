const cli = document.getElementById("box");

 cli.addEventListener("dblclick", () => {
     alert("You just clicked me!")
     if(document.body.style.backgroundColor == "yellow"){
        document.body.style.backgroundColor = "orange";
     }
     else{
        document.body.style.backgroundColor = "yellow";
     }
     
 });