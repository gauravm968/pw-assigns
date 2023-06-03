class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, '*');
    }
  
    setPassword(newPass) {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (regex.test(newPass)) {
        this.password = newPass;
      } else {
        console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
}

const user = new User('Gaurav', 'Gaurav123456');
console.log(user.getPassword()); 

user.setPassword('myPassword');  //Error

user.setPassword('MyPassword');  // Error

user.setPassword('Gaurav654321');
console.log(user.getPassword()); 
