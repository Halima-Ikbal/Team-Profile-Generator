const Employee = require("./Employee");
// employee + manager = manager
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    //employee constructor
    super (name, id, email);
    this.officeNumber = officeNumber;
  }
  // override role to Manager
  getRole() {
    return "Manager";
  }
  //get office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// to be exported
module.exports = Manager; 