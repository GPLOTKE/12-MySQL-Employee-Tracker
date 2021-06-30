const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password1',
    database: 'employee_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
});

inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do?',
    name: 'task',
    choices: ['View Departments',
        'View Roles',
        'View Employees',
        'Add Departments',
        'Add Roles',
        'Add Employees',
        'Update Employee Roles'
    ],
}, ])