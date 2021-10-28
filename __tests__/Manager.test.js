const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Jon Moore', 'id#', 'email@email.com', 'office#');

    expect(manager.getName()).toBe('Jon Moore');
    expect(manager.getId()).toBe('id#');
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.getOffice()).toBe('office#');
    expect(manager.getPosition()).toBe('Manager');
});

