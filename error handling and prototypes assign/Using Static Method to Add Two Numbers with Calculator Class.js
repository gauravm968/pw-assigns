class Calculator {
  static add(a, b) {
    return a + b;
  }
}


const calc = new Calculator();


const result = calc.constructor.add(10, 5);

console.log(result);
