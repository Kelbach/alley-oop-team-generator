const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const manager = new Employee('Jon Moore');
    expect(manager.name).toBe('Jon Moore');
});