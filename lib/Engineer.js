const Employee = require('../lib/Employee')
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name,id,email);
        this.github = github;
    }
}
module.exports = Engineer;