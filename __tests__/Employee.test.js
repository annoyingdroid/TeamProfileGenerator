// TODO Write test cases for employee

const Employee = require('../lib/Employee');
const employee = new Employee('Ryan Reynolds', 'ryanr@mail.com', '10');

//Create Employee
test('Create new employee', () => {
    expect(employee.name).toEqual('Ryan Reynolds');
    expect(employee.email).toEqual('ryanr@mail.com');
    expect(employee.id).toEqual('10');
});

//Return Name
test('Return employee name', () => {
    expect(employee.getName()).toEqual('Ryan Reynolds');
});
//Return Email
test('Return employee email', () => {
    expect(employee.getEmail()).toEqual('ryanr@mail.com');
});
//Return ID
test('Return employee id', () => {
    expect(employee.getId()).toEqual('10');
});