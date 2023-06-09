// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getPassword(){
        return "*".repeat(this.password.length);
    }

    setPassword(newPassword){
      if (newPassword.length >=8 && /[A-z]/.test(newPassword)
       && /\d/.test(newPassword)) {
        this.password =newPassword
      }
      else{
        console.log("Invalid Password.password is at least 8 characters long. and contains at least one number and one,and one uppercase letter.");
      }
    }
}

const result = new User('aditya','aditya1122')
// console.log(result.getPassword());


result.setPassword("ad");
console.log(result.getPassword()); // Output: ****************

//  User.setPassword(aditya1233)
// console.log(User.getPassword());





