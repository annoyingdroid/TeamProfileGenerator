const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const curTeam = [];

const fs = require('fs');
const inquirer = require('inquirer');

const generateTeam = () => {
    while(true){
        console.log("Create New Team");

        return inquirer.prompt ([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ['Get Current Team', 'Add Employee', 'Add Manager', 'Exit']
            }

        ]).then(choice => {
            switch(choice.options) {
                case 'Get Current Team': console.log(curTeam); generateTeam(); break;
                case 'Add Employee': addEmployee(); break;
                case 'Add Manager': addManager(); break;
                case 'Exit': generateHTML(); break;
                default: break;
            }
        })
    }
}

const addEmployee = () => {
    console.log("\n Add Employee \n");

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the employee'

        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the ID for the employee'
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the employee'

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
    ]).then(newEmployee => {
        var {name, employeeID, email, role, github, school, employeeConfirm} = newEmployee;
        var exportEmp;

        switch(role){
            case 'Engineer':
                exportEmp = new Engineer(name, email, employeeID, github)
                curTeam.push(exportEmp);
            case 'Intern':
                exportEmp = new Intern(name, email, employeeID, school)
                curTeam.push(exportEmp);
            default: break;
        }

        if(employeeConfirm){
            addEmployee();
        } else {
            generateTeam();
        }
    })
}

const addManager = () => {
    console.log("\n Add Manager \n");

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager'

        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the ID for the manager'
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email for the manager'
            
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number for the manager'
            
        },
        {
            type: 'confirm',
            name: 'employeeConfirm',
            message: 'Manager created. Add another?',
            default: false
        }
    ]).then(newManager => {
        var {name, managerID, email, office, employeeConfirm} = newManager;
        var exportMan;

        exportMan = new Manager(name, managerID, email, office);
        curTeam.push(exportMan);

        if(employeeConfirm){
            addManager();
        } else {
            generateTeam();
        }
    });
}

generateHTML = () => {
    var i = 0;
    while (i < curTeam.length){
        switch(curTeam[i].getRole()){
            case 'Engineer': i++;
            case 'Intern': i++;
            case 'Manager': i++;
            default: break;
        }
    }
}

generateTeam();