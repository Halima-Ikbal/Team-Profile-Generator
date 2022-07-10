const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // ovrride role to Engineer
  getRole() {
    return "Engineer";
  }
  //get github username
  getGithub() {
    return this.github;
  }
}


// to be exported
module.exports = Engineer;