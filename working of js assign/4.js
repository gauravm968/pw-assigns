{
    console.log("Before Declaration -");
    console.log(varType);         //undefined
    console.log(letType);       //ReferenceError: Cannot access 'letType' before initialization
    console.log(constType);       //ReferenceError: Cannot access 'letType' before initialization

    var varType = 1;
    let letType = 2;
    const constType = 3;

    console.log("Before Declaration -");
    console.log(varType);
    console.log(letType);
    console.log(constType);

}