const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const manager = new Employee('manager','Jon Moore', 'id#', 'email@email.com');

    expect(manager.name).toBe('Jon Moore');
    expect(manager.type).toBe('manager');
    expect(manager.id).toBe('id#');
    expect(manager.email).toBe('email@email.com');
});