class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //return name from input
  getName() {
    return this.name;
  }
  // return id from input
  getId() {
    return this.id;
  }
  //return email from input
  getEmail() {
    return this.email;
  }
  // return employee role from input
  getRole() {
    return "Employee";
  }
}


// to be exported 
module.exports = Employee;