const buildPage = require('./src/employeeTemplates');
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
                case 'Exit': generateHTML(curTeam); break;
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
            message: 'Please enter the name of the employee',
            validate: name => {
                if(name)
                    return true;
                else {
                    console.log("Please enter a name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the ID for the employee',
            validate: id => {
                if(id)
                    return true;
                else {
                    console.log("Please enter a id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the employee',
            validate: email => {
                if(email)
                    return true;
                else {
                    console.log("Please enter an email");
                    return false;
                }
            }
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
            message: 'Please enter the github username for the employee',
            when: input => input.role == 'Engineer',
            validate: username => {
                if(username)
                    return true;
                else {
                    console.log("Please enter a username");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school for the employee',
            when: input => input.role == 'Intern',
            validate: school => {
                if(school)
                    return true;
                else {
                    console.log("Please enter a school");
                    return false;
                }
            }
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
                break;
            case 'Intern':
                exportEmp = new Intern(name, email, employeeID, school)
                curTeam.push(exportEmp);
                break;
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
            message: 'Please enter the name of the manager',
            validate: name => {
                if(name)
                    return true;
                else {
                    console.log("Please enter a name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the ID for the manager',
            validate: id => {
                if(id)
                    return true;
                else {
                    console.log("Please enter a id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email for the manager',
            validate: email => {
                if(email)
                    return true;
                else {
                    console.log("Please enter an email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number for the manager',
            validate: office => {
                if(oficce)
                    return true;
                else {
                    console.log("Please enter an office number");
                    return false;
                }
            }
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

generateHTML = (data) => {
    console.log(data);
    var newPage = buildPage(data);
    fs.writeFile('./dist/index.html', newPage , (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("File Written Successfully");
            }
        }
    );
    
}

generateTeam();