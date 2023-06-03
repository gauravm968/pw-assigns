function getPerson(obj) {
    try {
      if (typeof obj !== "object" || obj === null || !("name" in obj) || !("age" in obj)) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${obj.name}, Age: ${obj.age}`;
    } catch (error) {
      return error.message;
    }
  }

console.log(getPerson({name: "Mithun", age: 20})); 
console.log(getPerson({name: "Mithun"})); // Invalid parameter type
console.log(getPerson(["name", "Mithun"])); // Invalid parameter type
  