const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fillTemplate = require('../src/page-template');
const { writeFile } = require('../utils/generate-page');

// Questions obj handles the iqnuirer prompt logic
class Questions{
  constructor(){
    // these attr will store the employee objs.
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

  // used to ensure id's entered for employees are unique
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
    // If there is no data for either array then there are no possible conflicting values
    if (engineersUndefined && internsUndefined){
      return false
    };

    // If ther is data, check engineers array for the property's value in each obj
    if(!engineersUndefined){
      for(var i = 0; i < this.engineers.length; i++){
        if(this.engineers[i][property] === value){
          return true;
        };
      };
    }

    // If ther is data, check interns array for the property's value in each obj
    if(!internsUndefined){
      for(var i = 0; i < this.interns.length; i++){
        if(this.interns[i][property] === value){
          return true;
        };
      };
    }
  };

  // this is the method called when application is ran on index.js to begin the question prompts
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
      this.promptNextMember(); // end of method -> opens a menu of options
    });
  };

  promptNextMember(){
    inquirer
    .prompt({
        type: 'list',
        message: 'Which kind of team member would you like to add?',
        name: 'action',
        choices: ['Engineer', 'Intern', "Finish building my team"],
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
              if (this.checkIfValueExists(id, 'id')) { // constrol structure checks for undesirable conditions first
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
          this.promptNextMember(); // end of engineer prompts -> re opens menu of options
        })
      } else if (action === 'Intern') {
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
              if (this.checkIfValueExists(id, 'id')) { // constrol structure checks for undesirable conditions first
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
          this.promptNextMember(); // end of engineer prompts -> re opens menu of options
        });
      } else if (action === "Finish building my team"){
        this.promiseChain((fillTemplate(this))); // fillTemplate() returns page content
        // end of method
      }
    });
  };

  // if successful writes page content into index.html located in dist/.
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