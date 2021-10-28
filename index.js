const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

const manager = () => {
    console.log(`

    Welcome to the Alley-Oop Team Generator.
    After a series of questions this application will generate a simple and neat HTML elements for further editing.

    `)
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID#",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an office nubmer.');
                    return false;
                }
            }
        }
    ])
}

const employee = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add an Engineer or an Intern?',
            name: 'type',
            choices: ['Engineer', 'Intern', 'Neither. Make my HTML']
        }
    ]).then(({type}) => {
        if (type === 'Neither. Make my HTML'){
            console.log(team);
        } else if (type === 'Engineer') {
        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID#",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide the GitHub link to your engineer.',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please list a GitHub link!');
                return false;
                }
            } 
        }
    ])
    .then(employeeQ => {
        team.push(new Engineer(employeeQ.name, employeeQ.id, employeeQ.email, employeeQ.github));
        employee();
    });
    } else if (type === 'Intern') {
        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID#",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please provide the current school that your intern is attending.',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please list a contributor!');
                return false;
                }
            } 
        }
    ]).then(employeeQ => {
        team.push(new Engineer(employeeQ.name, employeeQ.id, employeeQ.email, employeeQ.school));
        employee();
    })
    }})
}

manager()
.then(managerQ => {
    team.push(new Manager(managerQ.name, managerQ.id, managerQ.email, managerQ.office));
})
.then(employee)

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated