const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // remeber the get methods
  getGitHub() {
    return this.gitHub;
  }
}
module.exports = Engineer;
