const Employee = require('../lib/Employee')


class Manager extends Employee {
    constructor(name = '', id = '', email = '', office = '') {
        super(name,id,email);
        this.office = office;
    }

    getManagerHTML() {
        return `
        ${this.name}, ${this.id}, ${this.email}, ${this.extra}
        `
    }
}

module.exports = Manager;