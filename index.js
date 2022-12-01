const {Engineer, Intern, Manager} = require("./lib")
const curTeam = [];

const fs = require('fs');
const inquirer = require('inquirer');

const generateTeam = () => {
    console.log("Generating New Team");

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'employees',
            message: 'What would you like to do?',
            choices: ['Get Current Team', 'Add Employee', 'Delete Employee', 'Add Manager', 'Delete Manager', 'Exit']
        }

    ]).then(choice => {
        switch(choice) {
            case 'Get Current Team': return curTeam;
            case 'Add Employee': addEmployee();
            case 'Delete Employee': deleteEmployee();
            case 'Add Manager': addManager();
            case 'Delete Manager': deleteManager();
            case 'Exit': break;
            default: break;
        }
    })
}

const addEmployee = () => {
    console.log("Add Employee");

    return inquirer.prompt([
        {
            type: 'input',
            name: 'eName',
            message: 'Please enter the name of the employee'

        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the ID for the employee'
            
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role for this employee?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the github username for the employee'
            
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school for the employee'
            
        },
        {
            type: 'confirm',
            name: 'employeeConfirm',
            message: 'Employee created. Add another?',
            default: false
        }
])
}