// TODO Write test cases for Engineer

const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Heidi Richards', 'heidi@mail.com', '10', 'Heidi.R');


//Create Engineer
test('Create new engineer', () => {
    expect(engineer.name).toEqual('Heidi Richards');
    expect(engineer.email).toEqual('heidi@mail.com');
    expect(engineer.id).toEqual('10');
    expect(engineer.github).toEqual('Heidi.R');
});

//Return Github
test('Check github', () => {
    expect(engineer.getGithub()).toEqual('Heidi.R');
});
//Return Role
test('Check role', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});