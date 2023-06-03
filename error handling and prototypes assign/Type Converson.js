function convertToNumber(str) {
  let n = Number(str);
  if (isNaN(n)) {
    throw new Error("Invalid number");
  }
  return n;
}

try {
  let num = convertToNumber("4343");     
  console.log(num);
} catch (error) {
  console.log(error.message); // 4343
}

try {
  let num = convertToNumber("abc");     //343
  console.log(num);
} catch (error) {
  console.log(error.message); // "Invalid number"
}

