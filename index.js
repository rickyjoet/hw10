const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const util = require('util')
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const render = require('./template.js')
const dir = path.resolve(__dirname, "output")
const filePath = path.join(dir, "team.html")
// const writeFileAsync = util.promisify(fs.writeFile);

const team = [];

const addManager = () => {
   inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager\'s name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the manager\'s id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your manager\'s email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your manager\'s office number?',
    },
  ])
  .then(result =>{
    const manager = new Manager(result.name, result.id, result.email, result.officeNumber);
    team.push(manager);
    crossroads();
    console.log(team);
  })
}

function crossroads() {
    inquirer.prompt([
        {
          type: "list",
          name: "role",
          message: "Who would you like to add to the team?",
          choices: [
            { title: 'Engineer', value: 'Engineer' },
            { title: 'Intern', value: 'Intern' },
            { title: "Build my team!", value: "Build my team!" }
          ],
          max: 1,
          hint: "- Space to select. Return to submit"
        }
    ])
        .then(res => {
            console.log(res.role)
            switch(res.role) {
                case 'Engineer':
                  return addEngineer();
                case 'Intern':
                  return addIntern();
                default:
                  return generateHTML();
              }
        })}

  const addIntern = () => {
    inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: 'What is the intern\'s name?',
     },
     {
       type: 'input',
       name: 'id',
       message: 'What is the intern\'s id?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is your intern\'s email?',
     },
     {
       type: 'input',
       name: 'schoolName',
       message: 'What school did the intern\'s attend?',
     },
   ])
   .then(result =>{
     const intern = new Intern(result.name, result.id, result.email, result.schoolName);
     team.push(intern);
     crossroads();
     console.log(team);
   })
}

const addEngineer = () => {
    inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: 'What is the engineer\'s name?',
     },
     {
       type: 'input',
       name: 'id',
       message: 'What is the engineer\'s id?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is your engineer\'s email?',
     },
     {
       type: 'input',
       name: 'gitHub',
       message: 'What is your engineer\'s gitHub?',
     },
   ])
   .then(result =>{
     const engineer = new Engineer(result.name, result.id, result.email, result.gitHub);
     team.push(engineer);
     crossroads();
     console.log(team);
   })
}

addManager();
// addIntern();
// addEngineer();

// TODO: Create a function to write to html file
function generateHTML() {
  if (!fs.existsSync(dir))
  {
    fs.mkdirSync(dir)
  } 
    fs.writeFileSync(filePath, render(team), "utf-8")

}





// TODO: Create a function to initialize app
// function init() {
  
//   //prompts
//   inquirer.prompt(questions)
//   //store responses
//   .then((answers) => {
//      //then create README 
//      writeToFile('readme.md', generateMarkdown(answers))
//      console.log("README is generated")

//   })

// }

// Function call to initialize app


