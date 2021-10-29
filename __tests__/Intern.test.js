const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Kevin Kelbach', 'id#', 'email@email.com', 'CWRU Coding Bootcamp');

    expect(intern.getName()).toBe('Kevin Kelbach');
    expect(intern.getId()).toBe('id#');
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getSchool()).toBe('CWRU Coding Bootcamp');
    expect(intern.getRole()).toBe('Intern');
});