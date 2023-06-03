console.log(multiplayNumbers(6,5));    //ReferenceError 

const multiplayNumbers = function(a,b){        //  can't use hoisting through function expression
    return a*b;
}