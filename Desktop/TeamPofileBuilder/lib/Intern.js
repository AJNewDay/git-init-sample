const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // remeber the get methods
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
