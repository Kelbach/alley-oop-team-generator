const inquirer = require('inquirer');
// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

class Employee {
    constructor(type, name, id, email) {
        this.type = type;
        this.name = name; 
        this.id = id;
        this.email = email;
        // this.office = office;
        // this.github = github;
        // this.school = school;
    }

    // office() {
    //     if ( this.type === 'manager') {
    //         this.office = inquirer.prompt([{
    //             type: 'text',
    //             name: 'office',
    //             message: "What is the manager's office number?"
    //         }])
    //     }
    // }

    // github() {
    //     if ( this.type === 'engineer') {
    //         this.github = inquirer.prompt([{
    //             type: 'text',
    //             name: 'github',
    //             message: "What is employee's GitHub username?"
    //         }])
    //     }
    // }

    // school() {
    //     if ( this.type === 'intern') {
    //         this.school = inquirer.prompt([{
    //             type: 'text',
    //             name: 'office',
    //             message: "What is intern's school?"
    //         }])
    //     }
    // }
}

module.exports = Employee;