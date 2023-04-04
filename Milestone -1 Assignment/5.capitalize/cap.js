const n1 = document.getElementById("name1")
const n2 = document.getElementById("name2")

function capCheck(){                                               
n1.value = (n1.value[0] >= 'a' && n1.value[0] <= 'z') ? n1.value[0].toUpperCase() + n1.value.substring(1) : n1.value; 

n2.value = (n2.value[0] >= 'a' && n2.value[0] <= 'z') ? n2.value[0].toUpperCase() + n2.value.substring(1) : n2.value;
//1 to length , substring(0,3)
}

// .slice(1, n1.value.length)