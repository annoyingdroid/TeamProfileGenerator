// TODO Write test cases for Manager

const Manager = require("../lib/Manager");
const manager = new Manager('Ellis Hanly', 'EHanly@mail.com', '10', '414');

//Create Manager
test('Create new Manager', () => {
    expect(manager.name).toEqual('Ellis Hanly');
    expect(manager.email).toEqual('EHanly@mail.com');
    expect(manager.id).toEqual('10');
    expect(manager.officeNumber).toEqual('414');
});

//Get Role
test('Check role', () => {
    expect(manager.getRole()).toEqual('Manager');
});

