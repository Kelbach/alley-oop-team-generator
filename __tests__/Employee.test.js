const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const manager = new Employee('Employee', 'id#', 'email@email.com');

    expect(manager.name).toBe('Employee');
    expect(manager.id).toBe('id#');
    expect(manager.email).toBe('email@email.com');
});

