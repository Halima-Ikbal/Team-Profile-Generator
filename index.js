
// node modules
const inquirer = require("inquirer");
const fs = require("fs");
// team profiles

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require('./src/generateHTML');

// employees array
const employees =[];
// start of manager prompts
const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name : 'name',
      message: 'Who is the manager of this team?(Require!)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          //Repeat the question to try and get user input 
          console.log("Please, enter the manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message:"Please, enter the manager's ID. (Require!)",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          //Repeat the question to try and get user input 
          console.log("Please, enter the manager's ID!")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email. (Require!)",
      validate: nameInput => {
          if (nameInput) {
            return true;
          }else {
            console.log ('Please enter an email!')
            return false;
          }
        }
        
      
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the office number of the team manager? (Require!)",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log('Please enter an office number!')
          return false;
        } else {
          return true;
        }
      }
    }
  ])
  //Then take the team manager input info
  .then(managerInput => {
    // Make Node questions into a variable
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id, email, officeNumber);
    // Push manager to the team array so it can be added to the generateHTML
    employees.push(manager);
    
  })

};

const addEmployee = () => {
  console.log(` 
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Adding employees to the team
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `);

  return inquirer.prompt([
    {
      type: 'list', 
      name: 'role', 
      message: "Please choose your employee's role (Require!)",
      // Give two employee choices as the Intern and Engineer classes extend the employee class
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the employee? (Require!)", 
      validate: nameInput => {
          if (nameInput) {
           return true;
         } else {
            console.log ("Please enter an employee's name!");
            return false; 
         }
      }
    },
    {
      type: 'input',
      name: 'id',
      message : "Please enter the employee's ID. (Require!)",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the employee's ID!")
          return false;
        }else {
          return true;
        }
      }
    },
    {
      type : 'input',
      name: 'email',
      message: "Please enter the employee's email. (Require!)",
      validate: nameInput => {       
        if (nameInput) {
          return true;
        }else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's github username. (Require!) ",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log ("Please enter the employee's github username!")
        }
    
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school (Require!)",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
           console.log ("Please enter the intern's school!")
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false 
    }
  ])
  .then (employeeData => {
    // data for types of employee
    let{ name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;
    // scope the engineer to this block
    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);

    }
    // scope the intern to this block
    else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }
    employees.push(employee);
    if (confirmAddEmployee) {
      return addEmployee(employees);
    }else {
      return employees;
    }
  })
};

//function to generate HTML page file using file system
const writeFile = data => {
  fs.writeFile('./generateHTML.html', data, err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created

    }else {
      console.log("Your team profile has been successfully created! Please check out the index.html")
    }
  })
};

// Function call to initialize app

// exports

// addManager()
// // run addEmployee fxn to add employee(s) to array
// .then(addEmployee)
// // then add the whole employees array to the generateHTML
// .then(employees => {
//   return generateHTML(employees);
// })
// // write an HTML file with the generated employees array
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// // if error then state error in command-line
// .catch(err => {
//   console.log(err);
// });


// // var greeting= 'hello'
// // console.log(greeting);
// init();
module.exports 