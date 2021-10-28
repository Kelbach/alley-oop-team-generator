const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('manager','Jon Moore', 'id#', 'email@email.com');

    expect(manager.name).toBe('Jon Moore');
    expect(manager.type).toBe('manager');
    expect(manager.id).toBe('id#');
    expect(manager.email).toBe('email@email.com');
});