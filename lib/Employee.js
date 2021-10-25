const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        // this.type = type;
        // this.id = id;
        // this.email = email;
        // this.office = office;
        // this.github = github;
        // this.school = school;
    }

    isManager() {
        if (this.type === 'manager') {
            return true;
        }
        return false;
    };
}

module.exports = Employee;