//method 1
function manipulateString(str) {
    const upperCaseStr = str.toUpperCase();
    return function logString() {
      console.log(`The manipulated string is: ${upperCaseStr}`);
    }
  }

  let manipulated = manipulateString("hello, world!")
  manipulated()  // The manipulated string is: HELLO, WORLD!

//method 2
// function manipulateString(str) {
//     const manipulatedString = inputString.toUpperCase();

//     Callback(manipulatedString);
// }

// function logString(manipulatedString) {
//     console.log(' The manipulated string is: ${manipulatedString}');
// }
// manipulateString("hello, world!", logString);


