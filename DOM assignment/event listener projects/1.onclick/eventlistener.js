 function clickFunc(){
     alert("You just clicked me!")
     if(document.body.style.backgroundColor == ""){
        document.body.style.backgroundColor = "green";
     }
     else{
        document.body.style.backgroundColor = "";
     }  
 }