// TODO Write test cases for Intern

const Intern = require('../lib/Intern');
const intern = new Intern('Al Clark', 'AlClark@mail.com', '10', 'Princeton');


//Create Intern
test('Create new Intern', () => {
    expect(intern.name).toEqual('Al Clark');
    expect(intern.email).toEqual('AlClark@mail.com');
    expect(intern.id).toEqual('10');
    expect(intern.school).toEqual('Princeton');
});

//Return Github
test('Check school', () => {
    expect(intern.getSchool()).toEqual('Princeton');
});
//Return Role
test('Check role', () => {
    expect(intern.getRole()).toEqual('Intern');
});