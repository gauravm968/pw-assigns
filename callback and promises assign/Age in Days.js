function ageInDays(person) {  
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageDays = person.age * 365; 
  
    return function(){
      console.log(`The person's full name is ${fullName} and their age in days is ${ageDays}.`);
    };
  }

const person = {
   firstName: 'Gaurav',
   lastName: 'M',
   age: 20,
};

let ageD = ageInDays(person);
ageD();



//callback function 
// function logPersonInfo(fullName, ageDays) {
//     console.log(`The person's full name is ${fullName} and their age in days is ${ageDays}.`);
// }

// ageInDays(person, logPersonInfo); 
