const Employee = require("./Employee");

class Intern extends Employee {
  constructor (name, id, email, school) {
    //employee constructor
    super (name, id, email);
    this.school = school;
  }
  //override role to intern
  getRole() {
    return "Intern";
  }
  // return school input
  getSchool() {
    return this.school;
  }
}


module.exports = Intern;



