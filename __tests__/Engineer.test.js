const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Matt Baber', 'id#', 'email@email.com', 'githubusername');

    expect(engineer.getName()).toBe('Matt Baber');
    expect(engineer.getId()).toBe('id#');
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGithub()).toBe('githubusername');
    expect(engineer.getPosition()).toBe('Engineer');
});