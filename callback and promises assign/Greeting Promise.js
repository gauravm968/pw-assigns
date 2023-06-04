function greet(name){
  return new Promise((resolve) => {
    let greeting = `Hello, ${name}!`;
    resolve(greeting);
  });
}

greet("Gaurav")
  .then(function(greeting) {
    console.log(greeting); // logs "Hello, Mithun!"
  })
  .catch(function(error) {
    console.error(error);
  });
