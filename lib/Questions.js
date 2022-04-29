const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fillTemplate = require('../src/page-template');
const { writeFile } = require('../utils/generate-page');

class Questions{
  constructor(){
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

  checkIfValueExists(value, property){
    // checks manager first since first prompt object filled
    if(this.manager[property] === value){
      return true;
    };

    // checks if either arrays are empty
    let engineersUndefined;
    let internsUndefined;
    if(typeof(this.engineers[0]) === 'undefined'){
      engineersUndefined = true
    }else{
      engineersUndefined = false
    };
    if(typeof(this.interns[0]) === 'undefined'){
      internsUndefined = true
    }else{
      internsUndefined = false
    }
    // no data for either has been entered for either arrays
    // so no possible conflicting values
    if (engineersUndefined && internsUndefined){
      return false
    };
    // check engineer array
    if(!engineersUndefined){
      for(var i = 0; i < this.engineers.length; i++){
        if(this.engineers[i][property] === value){
          return true;
        };
      };
    }

    // check intern array
    if(!internsUndefined){
      for(var i = 0; i < this.interns.length; i++){
        if(this.interns[i][property] === value){
          return true;
        };
      };
    }
  };

  getManager(){
    inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "What is your team manager's name?",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("You need to provide the manager's name!");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: "What is your team manager's employee id?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("You need to provide the manager's employee id!");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: "What is your team manager's email adress?",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("You need to provide the manager's email address!");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: "What is your team manager's office number?",
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log("You need to provide the manager's office number!");
          return false;
        }
      }
    }
  ])
  .then(answerObj => {
      this.manager = new Manager(answerObj);
      this.promptNextMember();
    });
  };

  promptNextMember(){
    inquirer
    .prompt({
        type: 'list',
        message: 'Which kind of team member would you like to add?',
        name: 'action',
        choices: ['Engineer', 'Intern'],
      }
    )
    .then(({ action }) =>{
      if (action === 'Engineer'){
        inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is your engineer's name?",
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log("You need to provide the engineer's name!");
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: "What is your engineer's employee id?",
            validate: id => {
              if (this.checkIfValueExists(id, 'id')) {
                console.log(
                " This id number has already been assigned!"
                );
                return false;
              } else if(!id){
                console.log("You need to provide the engineer's employee id!");
                return false
              } else {
                return true;
              }
            }
          },
          {
            type: 'text',
            name: 'email',
            message: "What is your engineer's email adress?",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log("You need to provide the engineer's email address!");
                return false;
              }
            }
          },
          {
            type: 'text',
            name: 'github',
            message: "What is your engineer's GitHub username?",
            validate: github => {
              if (github) {
                return true;
              } else {
                console.log("You need to provide the engineer's github username!");
                return false;
              }
            }
          }
        ])
        .then(answerObj => {
          const engineer = new Engineer(answerObj);
          this.engineers.push(engineer);
          this.addAnotherMember();
        })
      } else {
        inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is your intern's name?",
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log("You need to provide the intern's name!");
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: "What is your intern's employee id?",
            validate: id => {
              if (this.checkIfValueExists(id, 'id')) {
                console.log(
                " This id number has already been assigned!"
                );
                return false;
              }else if(!id){
                console.log("You need to provide the intern's employee id!");
                return false
              }else {
                return true;
              }
            }
          },
          {
            type: 'text',
            name: 'email',
            message: "What is your intern's email adress?",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log("You need to provide the interns's nemail address!");
                return false;
              }
            }
          },
          {
            type: 'text',
            name: 'school',
            message: "What school is your intern enrolled at?",
            validate: school => {
              if (school) {
                return true;
              } else {
                console.log("You need to provide the school's name the intern is enrolled at!");
                return false;
              }
            }
          }
        ])
        .then(answerObj => {
          const intern = new Intern(answerObj);
          this.interns.push(intern);
          this.addAnotherMember();
        });
      };
    });
  };

  addAnotherMember(){
    inquirer
    .prompt({
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'action',
      choices: ['Yes', 'No']
    })
    .then(({ action }) => {
      if(action === 'Yes'){
        this.promptNextMember();
      } else {
        this.promiseChain((fillTemplate(this)));
      }
    })
  };

  promiseChain(pageHTML){
    writeFile(pageHTML)
    .then(writeFileResponse => {
      console.log(writeFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
  };
};

module.exports = Questions;